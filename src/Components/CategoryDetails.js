import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
const client = new ApolloClient({
    uri: 'https://passup.trioangle.com/graphql',
    cache: new InMemoryCache()
  });

  const GetCategory = gql`
  query{
    getCategoryDetails{
     currencyCode
     category{
       id
       name
     }
   }
   }
   `;
export default function CategoryDetails() {
const { loading, error, data } = useQuery(GetCategory);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getCategoryDetails.category.map((category) => (
<li>
    <p>{category.name}</p>
</li>
  ));
}
