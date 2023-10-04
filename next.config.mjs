//const isEnabledMswMocking = process.env.NEXT_PUBLIC_MSW_MOCKING === "enabled";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.dog.ceo', 'avatars.githubusercontent.com'],
  },
  // async headers() {
  //   return [
  //     isEnabledMswMocking && {
  //       // Append the "Service-Worker-Allowed" header
  //       // to each response, overriding the default worker's scope.
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Service-Worker-Allowed",
  //           value: "/",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
