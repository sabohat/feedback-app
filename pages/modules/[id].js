import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FeedbackCard from "../../components/FeedbackCard";
export default function Module() {
  const router = useRouter();
  const { id } = router.query;

  const [feedbacks, setFeedbacks] = React.useState([]);
  const [module, setModule] = React.useState(null);

  useEffect(() => {
    if (id !== undefined) {
      // get feedbacks
      axios
        .get(`https://mysterious-beyond-72223.herokuapp.com/api/modules/${id}/feedbacks`)
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
    }
  }, [id]);

  return (
    <div className="wrapper w-full h-[65vh] items-center justify-center flex flex-col">
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
