// // import { env } from "@/env.mjs";


// // type functionNames =
// //   | "fetch_businesses"
// //   | "fetch_restaurants"
// //   | "fetch_local_services"
// //   | "fetch_entertainment"
// //   | "fetch_health_wellness"
// //   | "fetch_shopping_retail"
// //   | "fetch_miscellaneous";

// // type YelpConfigParams = {
// //     latitude: number;
// //     longitude: number;
// //     limit?: number;
// //     categories?: string;
// //     term?: string;
// //     [key: string]: string | number | undefined;
// // }

// // type BusinessResult = {
// //     total: number;
// //     businesses: {
// //       rating: number;
// //       price: string;
// //       phone: string;
// //       id: string;
// //       categories: {
// //         alias: string;
// //         title: string;
// //       }[];
// //       review_count: number;
// //       name: string;
// //       url: string;
// //       coordinates: {
// //         latitude: number;
// //         longitude: number;
// //       };
// //       image_url: string;
// //       location: {
// //         city: string;
// //         country: string;
// //         address2: string;
// //         address3: string;
// //         state: string;
// //         address1: string;
// //         zip_code: string;
// //       };
// //     }[];
// // };
  
// // type YelpResponse = BusinessResult;

// // export const functions: {
// //   name: functionNames;
// //   description: string;
// //   parameters: object;
// // }[] = [
// //   {
// //     name: "fetch_businesses",
// //     description: "Get a list of businesses based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search businesses in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of businesses to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_restaurants",
// //     description: "Get a list of restaurants based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search restaurants in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of restaurants to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_local_services",
// //     description: "Get a list of local services based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search local services in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of local services to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_entertainment",
// //     description: "Get a list of entertainment options based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search entertainment options in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of entertainment options to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_health_wellness",
// //     description: "Get a list of health and wellness centers based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search health and wellness centers in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of health and wellness centers to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_shopping_retail",
// //     description: "Get a list of shopping and retail stores based on location.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search shopping and retail stores in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of shopping and retail stores to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// //   {
// //     name: "fetch_miscellaneous",
// //     description: "Generic search function for queries that don't fit other categories.",
// //     parameters: {
// //       type: "object",
// //       properties: {
// //         location: {
// //           type: "string",
// //           description: "The location to search in. Results should be within 3 miles of this location",
// //         },
// //         limit: {
// //           type: "number",
// //           description: "The number of results to return. Defaults to 100.",
// //         },
// //       },
// //       required: ["location"],
// //     },
// //   },
// // ];


// // const YELP_BUSINESS_ENDPOINT = `${env.YELP_API_ENDPOINT}/businesses/search`;

// // const fetchWithYelpConfig = async (endpoint: string, params: YelpConfigParams) => {

// //   const url = new URL(endpoint);
// //   Object.keys(params).forEach(key => {
// //     const value = params[key];
// //     if (typeof value === 'string' || typeof value === 'number') {
// //       url.searchParams.append(key, value.toString());
// //     }
// //   });

// //   try {
// //     const response = await fetch(url.toString(), {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `Bearer ${env.YELP_API_KEY}`
// //       }
// //     });

// //     const data: YelpResponse = await response.json() as YelpResponse;
// //     return data;

// //   } catch (error) {
// //     console.error(error);
// //     throw new Error('Error fetching data from Yelp API.');
// //   }
// // };

// // export const fetch_businesses = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'businesses' });

// // export const fetch_restaurants = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'restaurants' });

// // export const fetch_local_services = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'localservices' });

// // export const fetch_entertainment = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'arts,nightlife' });

// // export const fetch_health_wellness = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'health,active' });

// // export const fetch_shopping_retail = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit, categories: 'shopping' });

// // export const fetch_miscellaneous = async (latitude:number, longitude:number, limit = 9) => 
// //   fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, { latitude, longitude, limit });


// // export const runChatFunctions = async (
// //     functionName: string, 
// //     params: { 
// //         latitude: number,  
// //         longitude: number,
// //     }
// // ) => {

// //     const functionToRun = functions.find(f => f.name === functionName);

// //     if (!functionToRun) {
// //         throw new Error('Function not found.');
// //     }
    
// //     const { name } = functionToRun;

// //     const { latitude, longitude } = params;
    
// //     switch (name) {
// //         case 'fetch_businesses':
// //             return await fetch_businesses(latitude, longitude);
// //         case 'fetch_restaurants':
// //             return await fetch_restaurants(latitude, longitude);
// //         case 'fetch_local_services':
// //             return await fetch_local_services(latitude, longitude);
// //         case 'fetch_entertainment':
// //             return await fetch_entertainment(latitude, longitude);
// //         case 'fetch_health_wellness':
// //             return await fetch_health_wellness(latitude, longitude);
// //         case 'fetch_shopping_retail':
// //             return await fetch_shopping_retail(latitude, longitude);
// //         case 'fetch_miscellaneous':
// //             return await fetch_miscellaneous(latitude, longitude);
// //         default:
// //             return null;
// // }

// // }


// import { env } from "@/env.mjs";

// type functionNames =
//   | "fetch_businesses"
//   | "fetch_restaurants"
//   | "fetch_local_services"
//   | "fetch_entertainment"
//   | "fetch_health_wellness"
//   | "fetch_shopping_retail"
//   | "fetch_miscellaneous";

// type YelpConfigParams = {
//   latitude: number;
//   longitude: number;
//   limit?: number;
//   categories?: string;
//   term?: string;
//   [key: string]: string | number | undefined;
// }

// type BusinessResult = {
//   total: number;
//   businesses: {
//     rating: number;
//     price: string;
//     phone: string;
//     id: string;
//     categories: {
//       alias: string;
//       title: string;
//     }[];
//     review_count: number;
//     name: string;
//     url: string;
//     coordinates: {
//       latitude: number;
//       longitude: number;
//     };
//     image_url: string;
//     location: {
//       city: string;
//       country: string;
//       address2: string;
//       address3: string;
//       state: string;
//       address1: string;
//       zip_code: string;
//     };
//   }[];
// };

// type YelpResponse = BusinessResult;


// export const functions: {
//   name: functionNames;
//   description: string;
//   parameters: object;
// }[] = [
//   {
//     name: "fetch_businesses",
//     description: "Get a list of businesses based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search businesses in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of businesses to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_restaurants",
//     description: "Get a list of restaurants based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search restaurants in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of restaurants to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_local_services",
//     description: "Get a list of local services based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search local services in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of local services to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_entertainment",
//     description: "Get a list of entertainment options based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search entertainment options in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of entertainment options to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_health_wellness",
//     description: "Get a list of health and wellness centers based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search health and wellness centers in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of health and wellness centers to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_shopping_retail",
//     description: "Get a list of shopping and retail stores based on location.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search shopping and retail stores in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of shopping and retail stores to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
//   {
//     name: "fetch_miscellaneous",
//     description: "Generic search function for queries that don't fit other categories.",
//     parameters: {
//       type: "object",
//       properties: {
//         location: {
//           type: "string",
//           description: "The location to search in. Results should be within 3 miles of this location",
//         },
//         limit: {
//           type: "number",
//           description: "The number of results to return. Defaults to 100.",
//         },
//       },
//       required: ["location"],
//     },
//   },
// ];



// // const YELP_BUSINESS_ENDPOINT = `${env.YELP_API_ENDPOINT}/businesses/search`;

// // // Fetch data from Yelp API with configuration
// // const fetchWithYelpConfig = async (endpoint: string, params: YelpConfigParams): Promise<YelpResponse> => {
// //   const url = new URL(endpoint);
// //   Object.keys(params).forEach(key => {
// //     const value = params[key];
// //     if (typeof value === 'string' || typeof value === 'number') {
// //       url.searchParams.append(key, value.toString());
// //     }
// //   });

// //   try {
// //     const response = await fetch(url.toString(), {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `Bearer ${env.YELP_API_KEY}`
// //       }
// //     });

// //     const data: YelpResponse = await response.json() as YelpResponse;
// //     return data;

// //   } catch (error) {
// //     console.error(error);
// //     throw new Error('Error fetching data from Yelp API.');
// //   }
// // };

// // // Fetch data in chunks
// // const fetchChunkedData = async (latitude: number, longitude: number, category: string, limit = 100, chunkSize = 9) => {
// //   const allData: YelpResponse['businesses'] = [];
// //   const totalChunks = Math.ceil(limit / chunkSize);
// //   console.log(totalChunks)
  
// //   for (let i = 0; i < totalChunks; i++) {
// //     const offset = i * chunkSize;
// //     const params = { latitude, longitude, limit: chunkSize, offset, categories: category };
// //     const data = await fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, params);
// //     allData.push(...data.businesses);
// //   }

// //   return allData;
// // };

// // // Define functions to fetch specific business types
// // const fetch_businesses = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'businesses');
// // };

// // const fetch_restaurants = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'restaurants');
// // };

// // const fetch_local_services = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'localservices');
// // };

// // const fetch_entertainment = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'arts');
// // };

// // const fetch_health_wellness = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'health');
// // };

// // const fetch_shopping_retail = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'shopping');
// // };

// // const fetch_miscellaneous = async (latitude: number, longitude: number) => {
// //   return await fetchChunkedData(latitude, longitude, 'others');
// // };

// // // Main function to run chat functions based on name
// // export const runChatFunctions = async (functionName: string, params: { latitude: number, longitude: number }) => {
// //   const functionToRun = functions.find(f => f.name === functionName);

// //   if (!functionToRun) {
// //     throw new Error('Function not found.');
// //   }

// //   const { name } = functionToRun;
// //   const { latitude, longitude } = params;

// //   switch (name) {
// //     case 'fetch_businesses':
// //       return await fetch_businesses(latitude, longitude);
// //     case 'fetch_restaurants':
// //       return await fetch_restaurants(latitude, longitude);
// //     case 'fetch_local_services':
// //       return await fetch_local_services(latitude, longitude);
// //     case 'fetch_entertainment':
// //       return await fetch_entertainment(latitude, longitude);
// //     case 'fetch_health_wellness':
// //       return await fetch_health_wellness(latitude, longitude);
// //     case 'fetch_shopping_retail':
// //       return await fetch_shopping_retail(latitude, longitude);
// //     case 'fetch_miscellaneous':
// //       return await fetch_miscellaneous(latitude, longitude);
// //     default:
// //       return null;
// //   }
// // };

// const YELP_BUSINESS_ENDPOINT = `${env.YELP_API_ENDPOINT}/businesses/search`;

// // // Define the type for Yelp API parameters and responses
// // type YelpConfigParams = {
// //     latitude: number;
// //     longitude: number;
// //     limit: number;
// //     offset: number;
// //     categories: string;
// // };

// // type YelpResponse = {
// //     businesses: Array<{
// //         id: string;
// //         name: string;
// //         // Add other relevant fields
// //     }>;
// // };

// // Fetch data from Yelp API with configuration
// const fetchWithYelpConfig = async (endpoint: string, params: YelpConfigParams): Promise<YelpResponse> => {
//     const url = new URL(endpoint);
//     Object.keys(params).forEach(key => {
//         const value = params[key as keyof YelpConfigParams];
//         if (typeof value === 'string' || typeof value === 'number') {
//             url.searchParams.append(key, value.toString());
//         }
//     });

//     try {
//         const response = await fetch(url.toString(), {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${env.YELP_API_KEY}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`Error fetching data from Yelp API: ${response.statusText}`);
//         }

//         const data: YelpResponse = await response.json();
//         return data;

//     } catch (error) {
//         console.error('Fetch error:', error);
//         throw new Error('Error fetching data from Yelp API.');
//     }
// };

// // Fetch data in chunks
// const fetchChunkedData = async (latitude: number, longitude: number, category: string, limit = 100, chunkSize = 9): Promise<YelpResponse['businesses']> => {
//     const allData: YelpResponse['businesses'] = [];
//     const totalChunks = Math.ceil(limit / chunkSize);

//     for (let i = 0; i < totalChunks; i++) {
//         const offset = i * chunkSize;
//         const params = { latitude, longitude, limit: chunkSize, offset, categories: category };
//         const data = await fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, params);
//         allData.push(...data.businesses);
//     }  
//     return allData;
// };

// // Define functions to fetch specific business types
// const fetch_businesses = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'businesses');
// };

// const fetch_restaurants = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'restaurants');
// };

// const fetch_local_services = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'localservices');
// };

// const fetch_entertainment = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'arts');
// };

// const fetch_health_wellness = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'health');
// };

// const fetch_shopping_retail = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'shopping');
// };

// const fetch_miscellaneous = async (latitude: number, longitude: number) => {
//     return await fetchChunkedData(latitude, longitude, 'others');
// };

// // Main function to run chat functions based on name
// export const runChatFunctions = async (functionName: string, params: { latitude: number, longitude: number }) => {
//     const functionToRun = functions.find(f => f.name === functionName);

//     if (!functionToRun) {
//         throw new Error('Function not found.');
//     }

//     const { name } = functionToRun;
//     const { latitude, longitude } = params;

//     switch (name) {
//         case 'fetch_businesses':
//             return await fetch_businesses(latitude, longitude);
//         case 'fetch_restaurants':
//             return await fetch_restaurants(latitude, longitude);
//         case 'fetch_local_services':
//             return await fetch_local_services(latitude, longitude);
//         case 'fetch_entertainment':
//             return await fetch_entertainment(latitude, longitude);
//         case 'fetch_health_wellness':
//             return await fetch_health_wellness(latitude, longitude);
//         case 'fetch_shopping_retail':
//             return await fetch_shopping_retail(latitude, longitude);
//         case 'fetch_miscellaneous':
//             return await fetch_miscellaneous(latitude, longitude);
//         default:
//             throw new Error(`Unsupported function name: ${name}`);
//     }
// };


/// NEW THING ////


import { env } from "@/env.mjs";

type functionNames =
  | "fetch_businesses"
  | "fetch_restaurants"
  | "fetch_local_services"
  | "fetch_entertainment"
  | "fetch_health_wellness"
  | "fetch_shopping_retail"
  | "fetch_miscellaneous";

type YelpConfigParams = {
  latitude: number;
  longitude: number;
  limit?: number;
  categories?: string;
  term?: string;
  [key: string]: string | number | undefined;
}

type BusinessResult = {
  total: number;
  businesses: {
    rating: number;
    price: string;
    phone: string;
    id: string;
    categories: {
      alias: string;
      title: string;
    }[];
    review_count: number;
    name: string;
    url: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    image_url: string;
    location: {
      city: string;
      country: string;
      address2: string;
      address3: string;
      state: string;
      address1: string;
      zip_code: string;
    };
  }[];
};

type YelpResponse = BusinessResult;


export const functions: {
  name: functionNames;
  description: string;
  parameters: object;
}[] = [
  {
    name: "fetch_businesses",
    description: "Get a list of businesses based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search businesses in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of businesses to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_restaurants",
    description: "Get a list of restaurants based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search restaurants in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of restaurants to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_local_services",
    description: "Get a list of local services based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search local services in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of local services to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_entertainment",
    description: "Get a list of entertainment options based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search entertainment options in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of entertainment options to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_health_wellness",
    description: "Get a list of health and wellness centers based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search health and wellness centers in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of health and wellness centers to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_shopping_retail",
    description: "Get a list of shopping and retail stores based on location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search shopping and retail stores in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of shopping and retail stores to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "fetch_miscellaneous",
    description: "Generic search function for queries that don't fit other categories.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The location to search in. Results should be within 3 miles of this location",
        },
        limit: {
          type: "number",
          description: "The number of results to return. Defaults to 100.",
        },
      },
      required: ["location"],
    },
  },
];

const YELP_BUSINESS_ENDPOINT = `${env.YELP_API_ENDPOINT}/businesses/search`;

// Fetch function with Yelp configuration
const fetchWithYelpConfig = async (endpoint: string, params: YelpConfigParams): Promise<YelpResponse> => {
  const url = new URL(endpoint);
  Object.keys(params).forEach(key => {
    const value = params[key as keyof YelpConfigParams];
    if (typeof value === 'string' || typeof value === 'number') {
      url.searchParams.append(key, value.toString());
    }
  });

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${env.YELP_API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from Yelp API: ${response.statusText}`);
    }

    const data: YelpResponse = await response.json();
    return data;

  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Error fetching data from Yelp API.');
  }
};

const fetchChunkedData = async (latitude: number, longitude: number, category: string, limit = 100, chunkSize = 9): Promise<YelpResponse['businesses']> => {
  const allData: YelpResponse['businesses'] = [];
  const totalChunks = Math.ceil(limit / chunkSize);

  for (let i = 0; i < totalChunks; i++) {
    const offset = i * chunkSize;
    const params = { latitude, longitude, limit: chunkSize, offset, categories: category };
    const data = await fetchWithYelpConfig(YELP_BUSINESS_ENDPOINT, params);
    allData.push(...data.businesses);
  }

  return allData;
};

const fetch_businesses = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'businesses');
};

const fetch_restaurants = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'restaurants');
};

const fetch_local_services = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'localservices');
};

const fetch_entertainment = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'arts');
};

const fetch_health_wellness = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'health');
};

const fetch_shopping_retail = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'shopping');
};

const fetch_miscellaneous = async (latitude: number, longitude: number) => {
  return await fetchChunkedData(latitude, longitude, 'others');
};

export const runChatFunctions = async (functionName: string, params: { latitude: number, longitude: number }) => {
  switch (functionName) {
    case 'fetch_businesses':
      return await fetch_businesses(params.latitude, params.longitude);
    case 'fetch_restaurants':
      return await fetch_restaurants(params.latitude, params.longitude);
    case 'fetch_local_services':
      return await fetch_local_services(params.latitude, params.longitude);
    case 'fetch_entertainment':
      return await fetch_entertainment(params.latitude, params.longitude);
    case 'fetch_health_wellness':
      return await fetch_health_wellness(params.latitude, params.longitude);
    case 'fetch_shopping_retail':
      return await fetch_shopping_retail(params.latitude, params.longitude);
    case 'fetch_miscellaneous':
      return await fetch_miscellaneous(params.latitude, params.longitude);
    default:
      throw new Error('Unsupported function name');
  }
};
