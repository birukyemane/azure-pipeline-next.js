"use client";

export default function ClientInfo() {
  return (
    <div style={{ marginTop: "20px" }}>
      <p>
        <strong>Client-side app name:</strong>{" "}
        {process.env.NEXT_PUBLIC_APP_NAME || "❌ Not available"}
      </p>

      <p>
        <strong>Client-side secret key:</strong>{" "}
        {process.env.API_SECRET_KEY || "❌ Not available"}
      </p>
    </div>
  );
}
