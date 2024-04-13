import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Boy,
  Css,
  Html,
  Javascript,
  Next,
  Node,
  Redux,
  icon2,
  icon3,
  icon4,
  logo,
  handIcon
} from "../assests/Images/index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Resume } from "../assests/Pdf";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const imagesWithText = [
  { image: Html, text: "HTML" },
  { image: Css, text: "CSS" },
  { image: Javascript, text: "JavaScript" },
  { image: Next, text: "Next.js" },
  { image: Node, text: "Node.js" },
  { image: Redux, text: "Redux" },
];

const icons = [
  {
    image: icon3,
    text: "HTML",
    link: "https://www.linkedin.com/in/sagar-yadav-860569249",
  },
  {
    image: icon2,
    text: "CSS",
    link: "https://sagar888299@gmail.com?subject=Subject%20Here&body=Body%20Here",
  },
  {
    image: icon4,
    text: "JavaScript",
    link: "https://github.com/sagar888299",
  },
];

const Home = () => {
  const form = useRef();
  useEffect(() => emailjs.init("kYtohPURh0yVs_V0-"), []);
  const handleSubmit = (values) => {
    console.log(form);
    emailjs
      .send(
        "service_uld69ej",
        "template_2a2o2qs",
        form.current.values,
        "kYtohPURh0yVs_V0-"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log(result);
        },
        (error) => {
          // show the user an error
          console.log(error, "error occured");
        }
      );
  };
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.download = "Sagar_Resume";

    link.href = Resume;

    link.click();
  };

  const openGmail = (event) => {
    event.preventDefault(); // Prevent the default action of the link
    var recipientEmail = "047sagaryadav.com.com"; // Replace with your recipient's email address
    var subject = "Meet";
    var body = "Body Here";
    var mailtoLink =
      "mailto:" +
      recipientEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.open(mailtoLink);
  };

  return (
    <>
      <nav className="flex justify-between p-10 h-20">
        <div>
          <img src={logo} />
        </div>
        <div className="mt-3">
          <button
            onClick={handleResumeDownload}
            className="text-sky-700 font-medium max-w-28  px-4 py-2 ring-2 rounded-l-full rounded-r-full "
          >
            Resume
          </button>
          <button className="text-sky-700 max-w-28 font-medium px-4 py-2 ring-2  rounded-l-full rounded-r-full ml-10">
            Contact
          </button>
        </div>
      </nav>
      <div className="flex-col h-screen justify-center items-center mt-16">
        <div className="absolute bg-teal-500 -z-10 h-96 mt-24 w-full"></div>
        <div className="flex justify-center items-center">
          <img
            src={Boy}
            className="animate-bounce shadow-lg h-40 w-40 rounded-full bg-white border p-4"
          />
        </div>
        <div className="text-6xl font-bold px-20 mt-10 text-white">
          <div className="flex justify-center items-center ">
            Hi,
            <img
              src={handIcon}
              className="h-20 animate-wiggle"
              alt="Icon"
            />
            I'm Sagar
          </div>
          Web Designer & Frontend Developer
        </div>
      </div>
      <div className="flex flex-col h-screen justify-center relative items-center gap-20">
        <div className="absolute bg-teal-500 h-96 mt-28 w-full"></div>
        <div className="text-5xl font-semibold mx-44 p-6 border border-dashed z-10 bg-slate-800 text-white rounded-md">
          Technologies I've had hands-on experience
        </div>
        <div className="flex flex-wrap gap-2 z-10">
          {imagesWithText.map(({ image: ImageComponent, text }, index) => (
            <div key={index}>
              <div
                className="relative flex 
            hover:animate-bounce justify-center bg-white items-center border border-contrast-400 rounded-md shadow-lg w-44 h-44 overflow-hidden"
              >
                <div class="animate-rotation absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                <div className="bg-slate-900 w-40 h-40 rounded-md z-10">
                  <img src={ImageComponent} />
                </div>
              </div>
              <span className="text-2xl border-b-2 font-semibold border-gray-800">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-screen justify-center relative font-base items-center gap-10">
        <div className="absolute bg-violet-300 -z-10 h-5/6 mt-24 w-full"></div>
        <div className="text-5xl font-semibold mx-44 p-2 rounded-md border border-dashed bg-stone-200 text-white ">
          Thanks for taking the time to reach out. Leave a message
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          innerRef={form}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-8 border p-8 rounded-lg shadow-xl shadow-md bg-white">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`border h-8 rounded-md ${
                        errors.name && touched.name ? "border-red-500" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`border h-8 rounded-md  ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <label htmlFor="message">Message</label>
                </div>
                <div>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className={`border rounded-md w-full h-40 ${
                      errors.message && touched.message ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-center item-center">
                <button
                  type="submit"
                  className="bg-sky-700 max-w-28 text-white px-4 py-2 rounded-lg hover:bg-sky-600"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex flex-col h-screen justify-center items-center gap-10 bg-red-200">
        <div>
          <img src={logo} />
        </div>
        <div className="text-3xl font-semanticbold">
          "Every day is a chance to live, learn, and level up."
        </div>
        <div className="flex ">
          {icons.map(({ image, text, link }, index) => (
            <div key={index}>
              {index === 1 ? ( // Check if it's icon2
                <div>
                  <a href="#" onClick={openGmail}>
                    <img src={image} alt={text} />
                  </a>
                </div>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={text} />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-xl font-semanticbold">
          Made By <span>&copy;</span> Sagar Yadav
        </div>
        <div className="text-xl font-semanticbold">Made With React</div>
      </div>
    </>
  );
};

export default Home;