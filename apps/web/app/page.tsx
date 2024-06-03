export default function Page() {
  console.log('test', process.env.VERCEL_ENV);

  return (
    <div>
      <h1>Page {process.env.VERCEL_ENV}</h1>
    </div>
  );
}
