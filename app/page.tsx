import ClientInfo from "./components/ClientInfo";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>

      <ClientInfo />
    </main>
  );
}
