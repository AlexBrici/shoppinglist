
const fetchXPath = ( url, ...xpathsAndCallback ) =>
{
 const [callback, ...xpaths] = xpathsAndCallback.reverse();
 return fetch(`http://gzm.me:8080/${url}`, { 'Content-Type': 'text/html' } )
   .then( blob => blob.text() )
   .then( htmlText =>
   {
     const
       html = new DOMParser().parseFromString(htmlText, "text/html");
     let results = [];

     for ( const xpath of xpaths )
     {
       const
         x = document.evaluate( xpath , html  ),
         result = x.iterateNext();
       results = [...results, []];
       while ( result )
       {
         results[results.length-1].push( result );
         result = x.iterateNext();
       }
     }
     return callback(...results.reverse());
   });
};

export default fetchXPath;