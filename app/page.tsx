import ClientInfo from "./components/ClientInfo";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>

      <p>
        <strong>server-side app name:</strong>{" "}
        {process.env.NEXT_PUBLIC_APP_NAME || "❌ Not available"}
      </p>

      <p>
        <strong>server-side secret key:</strong>{" "}
        {process.env.API_SECRET_KEY || "❌ Not available"}
      </p>

      <ClientInfo />
    </main>
  );
}
