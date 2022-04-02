import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function Feedback() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);
  const [module, setModule] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
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
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (feedback.trim() === "") {
      setFeedback("");
      setError("Please enter your feedback");
      return;
    }

    // submit feedback

    let id = router.query.id;

    axios
      .post(`https://mysterious-beyond-72223.herokuapp.com/api/feedbacks/`, {
        text: feedback,
        module: id,
        teacher: null,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFeedback("");
        setError(false);
        setSubmitted(true);
      })
      .catch((err) => {
        setError("Something went wrong, please try again");
        console.log(err);
      });
  };
  return (
    <>
      {submitted ? (
        <div className="wrapper w-full flex items-center justify-center flex-col h-60 md:h-96">
          <span className="text-xl mb-4">Successfully Submitted :)</span>
          <Link href="/">
            <a className="text-blue-500 cursor-pointer">Return to Home</a>
          </Link>
        </div>
      ) : (
        <div className="w-full flex items-start justify-between wrapper flex-col md:flex-row space-y-5 md:space-y-0">
          <div className="flex flex-col space-y-3">
            <span className="text-xl font-bold text-primaryBlue">
              – Fill the form to submit your feedback
            </span>
            <span className="bold">{module?.name}</span>
            <p className="italic text-[12px]">{module?.description}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border shadow-md w-full md:w-2/3 flex flex-col space-y-5 md:p-10"
          >
            <div className="flex flex-col space-y-3">
              <span>Overall difficulty of the module:</span>
              <ReactStars
                classNames="focus:outline-none"
                count={5}
                onChange={ratingChanged}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <span>Difficulty of the exams of this module:</span>
              <ReactStars
                classNames="focus:outline-none"
                count={5}
                onChange={ratingChanged}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <span>What did you choose this module?</span>
              <textarea
                className="w-full focus:outline-none  border p-2 rounded-md"
                placeholder="Because..."
                rows={5}
                resize="none"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-3">
              <span>What did you learn from the module?</span>
              <textarea
                className="w-full focus:outline-none border p-2 rounded-md"
                placeholder="During the module, I learned ...."
                rows={5}
                resize="none"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            {error && <span className="text-red-500 font-bold">{error}</span>}

            <Button
              type="submit"
              title="Submit Feedback"
              styles="bg-primaryBlue md:px-12 px-10 w-56"
            ></Button>
          </form>
        </div>
      )}
    </>
  );
}
