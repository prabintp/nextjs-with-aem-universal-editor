import ImageWithCTA from "@/components/image-with-cta";


interface HomeProps {
  readonly content: {
    title?: string;
    _path?: string
    descrpition?: { plaintext: string };
    componentFragmentReference?: any[];
  } | null;
}

export default function Home({ content }: HomeProps) {

  console.log("Content from AEM:", content);

const { title, descrpition, componentFragmentReference } = content || {};
  return (
    <div
      className={` grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" 
      data-cf-path={content?._path ?? ''}>
      <h1>{title}</h1>
      <p> 
        {descrpition?.plaintext}
      </p>
      {componentFragmentReference && componentFragmentReference.map((component, index) => (
        <ImageWithCTA
          key={component.id || index}
          title={component.title}
          description={component.description1?.plaintext ?? ''}
          imageUrl={component.componentImage?.image?._publishUrl ?? ''}
          imageAlt={component.componentImage?.imageAltText ?? ''}
          variation={index % 2 === 0 ? 'left' : 'right'}
          cfPath={component._path}
        />
      ))}
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}

export async function getServerSideProps() {

  const res = await fetch(`${process.env.AEM_HOST}${process.env.AEM_GRAPHQL_HOME_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.AEM_AUTH && { Authorization: process.env.AEM_AUTH }), // Include Authorization only if defined
    }
  });

  const json = await res.json();
  if (!res.ok) {
    console.error("Error fetching data from AEM:", json);
    return {
      notFound: true,
    };
  }

  const content = json?.data?.diriyahPageContentFragmentModelByPath?.item || null;

  return {
    props: { content },
  };
}
