import React from 'react';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const Page = ({
  data: {
    mdx: { body }
  }
}) => {
  return (
    <MDXProvider>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;

export default Page;
