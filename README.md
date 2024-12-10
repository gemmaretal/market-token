This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, Install all of the depedencies:
```bash
yarn install
```

Second run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000/market) with your browser to see the result.
Always remember to access the sub domain /Market for the market list

The implementation of this project using many depedencies such as :
- React Query TanStack : https://tanstack.com/query/v4/docs/framework/react/reference/useQuery
- MUI : https://mui.com/material-ui/getting-started/
- Axios as client and API request : https://axios-http.com/docs/intro
- All code using Typescript 

The development can be improved by implementing these kind methods in the future :
-  Using a color defined SVG that uploaded on S3
-  Combined 2 different API into 1 instead (but performance wise, 2 API is better because we can divide the service for that)
-  We can use websocket for the update price list
-  Make the price before and after the update of the request (but we can do this in client side even it's more effort)

## Deploy on Vercel
to access it online via Vercel, you can access open it in here : https://market-token.vercel.app/market
Always remember to access the sub domain /Market for the market list
