import { Pages } from "@/data/data";
import React from "react";
import ClientSideRenderring from "./components/components/ClientSideRendering";
// import ClientSideRenderring from "../service/[slug]/components/components/ClientSideRendering";

async function getData(url: string) {
  const res = await fetch(url);
  return res.json();
}

const Page = async ({ params }: { params: { slug: string } }) => {
  console.log(params, "kire");
  const filteredPage = Pages.find((page) => page.urls === `/${params.slug}`);

  const userPromises = filteredPage?.apis.map(async (api) => ({
    [api.data]: await getData(api.url),
  }));

  const data =
    (await Promise.all(userPromises)
      .then((resolvedDataArray) => {
        const allData = resolvedDataArray.reduce(
          (acc, item) => ({ ...acc, ...item }),
          {}
        );
        return allData;
      })
      .catch((error) => {
        console.error(error);
      })) || {};

  return (
    <React.Fragment>
      <ClientSideRenderring
        Element={filteredPage?.component}
        data={data}
        page={filteredPage}
      />
    </React.Fragment>
  );
};

export default Page;
