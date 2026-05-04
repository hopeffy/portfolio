import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  /** MDX paths are read via fs + join(); Vercel file tracing can omit them unless listed here. */
  outputFileTracingIncludes: {
    "/work": ["./src/app/work/projects/**/*.mdx"],
    "/work/[slug]": ["./src/app/work/projects/**/*.mdx"],
  },
};

export default withMDX(nextConfig);
