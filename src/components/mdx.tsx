import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";

function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const slug = slugify(children as string);
    const Tag = as;
    return (
      <Tag id={slug} className="font-headline text-on-surface mt-6 mb-3" {...props}>
        {children}
      </Tag>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-on-surface-variant leading-relaxed my-2">
      {children}
    </p>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="bg-surface-container-high px-1.5 py-0.5 rounded text-sm text-primary font-mono">
      {children}
    </code>
  );
}

function createCodeBlock(props: Record<string, unknown>) {
  if (
    props.children &&
    typeof props.children === "object" &&
    props.children !== null &&
    "props" in (props.children as object)
  ) {
    const childProps = (props.children as { props: { className?: string; children?: ReactNode } }).props;
    if (childProps.className) {
      const language = childProps.className.replace("language-", "");
      return (
        <pre className="bg-surface-container-low p-4 rounded overflow-x-auto my-4">
          <code className={`language-${language}`}>{childProps.children}</code>
        </pre>
      );
    }
  }

  return <pre {...props} />;
}

const components = {
  p: createParagraph as React.ComponentType,
  h1: createHeading("h1") as React.ComponentType,
  h2: createHeading("h2") as React.ComponentType,
  h3: createHeading("h3") as React.ComponentType,
  h4: createHeading("h4") as React.ComponentType,
  h5: createHeading("h5") as React.ComponentType,
  h6: createHeading("h6") as React.ComponentType,
  a: CustomLink as React.ComponentType,
  code: createInlineCode as React.ComponentType,
  pre: createCodeBlock as React.ComponentType,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}