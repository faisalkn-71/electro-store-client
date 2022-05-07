import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto text-start mt-5'>
            <h3>Difference between Javascript and NodeJS</h3>
            <p>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. But We can run Javascript outside the browser with the help of NodeJS. Javascript is basically used on the client-side. On the other hand nodejs is mostly used on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Javascript is used in frontend development and nodejs is used in server-side development. </p>

           <br />
           <br />

           <h3>Difference between SQL and NoSQL Databases</h3>
           <p>SQL is a RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). On the other hand NoSQL is a non-relational or distributed database system. SQL databases have fixed or static or predefined schema. NoSQL have dynamic schema. SQL databases are not suited for hierarchical data storage but these databases are best suited for complex queries. NoSQL databases are best suited for hierarchical data storage but these databases are not so good for complex queries. SQL follows ACID property. NoSQL follows CAP(consistency, availability, partition tolerance). </p>

           <br />
           <br />

           <h3>What is the purpose of JWT and how does it work?</h3>
           <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.</p>
           <p>A JSON Web Token consists of 3 parts separated by a period which are: 
               <li>header</li>
               <li>payload</li>
               <li>signature</li>
           </p>

        </div>
    );
};

export default Blogs;