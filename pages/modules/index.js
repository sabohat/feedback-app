import axios from "axios";
import Button from "../../components/common/Button";
import ModuleCard from "../../components/ModuleCard";
import { SearchIcon } from "../../components/svg";
import styles from "../../styles/Home.module.css";

export default function Modules({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className="w-full max-w-[600px] mx-auto flex items-center mb-10 mt-5 border py-2 px-3 bg-white shadow-md justify-between rounded-md">
       <span className="hidden md:block"><SearchIcon /></span> 
        <input className="focus:outline-none w-2/3" placeholder="Search a Module"/>{" "}
        <Button title="Search" styles="bg-primaryBlue md:px-12 py-2"></Button>
      </div>
      <div className="w-full flex items-center justify-center flex-col space-y-5">
        {data.map((item) => (
          <div key={item.id}>
            <ModuleCard
              title={item.name}
              description={item.description}
            ></ModuleCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://mysterious-beyond-72223.herokuapp.com/api/modules"
  );

  return {
    props: { data },
  };
}
