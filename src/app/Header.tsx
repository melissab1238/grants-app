export default function Header(props: { numSources: string }) {
  return (
    <>
      <h1 className="text-3xl font-bold">Funding Opportunities</h1>
      <p className="mt-3 text-2xl">Pulling from {props.numSources} sources.</p>
    </>
  );
}
