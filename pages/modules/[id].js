import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FeedbackCard from "../../components/FeedbackCard";
import ModuleCard from "../../components/ModuleCard";
export default function Module() {
  const router = useRouter();
  const { id } = router.query;

  const [feedbacks, setFeedbacks] = React.useState([
    {
      id: 1,
      text: "This module is very good",
      rating: 5,
      created_at: "2020-05-20",
    },
  ]);
  const [module, setModule] = React.useState(null);

  useEffect(() => {
    // get feedbacks
    axios
      .get(
        `https://mysterious-beyond-72223.herokuapp.com/api/modules/${id}/feedbacks`
      )
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // get module
    axios
      .get(`https://mysterious-beyond-72223.herokuapp.com/api/modules/${id}`)
      .then((res) => {
        setModule(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="wrapper w-full flex items-center justify-center flex flex-col">
      <span className="mb-12">Feedbacks: {module?.name}</span>
      <div>
        {feedbacks.map((item) => (
          <div key={item?.id}>
            <FeedbackCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
