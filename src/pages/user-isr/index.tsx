import { User } from "@/pages/types";

export async function getStaticProps() {
  // Fetch data from external API
  const data = await fetch("https://randomuser.me/api/");
  const json = await data.json();

  // Pass data to the page via props
  return {
    props: { data: json.results[0] },
    revalidate: 5, // In seconds;
  };
}

export default function UserPageISR({ data }: { data: User }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h2>
        Profile: {data.name.first} {data.name.last}
      </h2>
    </div>
  );
}
