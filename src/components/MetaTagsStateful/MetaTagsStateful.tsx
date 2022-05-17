import { observer } from "mobx-react-lite";
import React from "react";
import Head from "next/head";

import { useRootStore } from "../../stores/RootStore";


export const MetaTagsStateful = observer(() => {
  const { metaStore } = useRootStore();
  return (
    <Head>
      {metaStore.metaTagsArray.map((meta) => (
        <meta name={meta.key} content={meta.content} key={meta.key} />
      ))}
      {metaStore.metaTagsArrayWhatsApp.map((meta) => (
        <meta property={meta.key} content={meta.content} key={`property-${meta.key}`} />
      ))}
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="480" />
      <meta property="og:rich_attachment" content="true" />
      {metaStore.metaTagsTwitterArray.map((meta) => (
        <meta name={meta.key} content={meta.content} key={meta.key} />
      ))}
      {metaStore.metaGoogleArray.map((meta) => (
        <meta itemProp={meta.key} content={meta.content} key={meta.key} />
      ))}
      {metaStore.metaPinterestArray.map((meta) => (
        <meta property={meta.key} content={meta.content} key={meta.key} />
      ))}
    </Head>
  );
});
