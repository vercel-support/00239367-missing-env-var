export default function Page() {
  console.log('test', process.env.VERCEL_ENV);

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
