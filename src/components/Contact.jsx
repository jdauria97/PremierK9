import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Heading from "./Heading";
import Section from "./Section";

const Contact = () => {
  const form = useRef();
  const [toggleValue, setToggleValue] = useState(false);
  const [message, setMessage] = useState(""); // Add state for message

  const sendEmail = (e) => {
    e.preventDefault();

    const formElements = form.current.elements;
    for (let element of formElements) {
      if (element.hasAttribute("required") && !element.value.trim()) {
        element.focus();
        return setMessage(
          <div
            class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <span class="font-medium">
              `Please fill out the ${element.name.replace("_", " ")} field.`
            </span>
          </div>
        );
      }
    }

    emailjs
      .sendForm(
        "service_qfmik0f", // Replace with your EmailJS service ID
        "template_yqauk7p", // Replace with your EmailJS template ID
        form.current,
        "94m0fa9HHxlS07rnR" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!"); // Display success message as alert
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          alert(
            "An error occurred while sending your message. Please try again."
          ); // Display error message as alert
        }
      );
  };

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  return (
    <Section className="container" id="contact">
      <div className="container relative z-2 my-10">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg mb-10"
          title="Contact Us"
        />
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="block relative p-0.5 dark:bg-gray-800 rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Name:</label>
                <textarea
                  name="client_name"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your Name"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Email:</label>
                <textarea
                  type="email"
                  name="client _email"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your Email"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Phone Number:</label>
                <textarea
                  type="number"
                  name="client _phone"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your phone number, including area code"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Name:</label>
                <textarea
                  name="dog_name"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your Dog's Name"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Age:</label>
                <textarea
                  name="dog_age"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your Dog's Age"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Breed:</label>
                <textarea
                  name="dog_breed"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Your Dog's Breed"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">How long have you had your dog?</label>
                <textarea
                  name="owned_time"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Approximate Time"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="flex-col items-center cursor-pointer">
                  Is your dog spayed or neutered?
                  <input
                    name="spayed_neutered"
                    type="checkbox"
                    value={toggleValue}
                    onChange={handleToggleChange}
                    className="sr-only peer"
                  />
                  <div className="my-2 relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {toggleValue
                      ? "Yes, My dog is spayed or neutered."
                      : "No, My dog is not spayed or neutered."}
                  </span>
                </label>
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  What specific behavior or obedience issues would you like to
                  address?
                </label>
                <textarea
                  name="issues"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., pulling on the leash, jumping, barking, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  What are your main goals for training your dog?
                </label>
                <textarea
                  name="goals"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., better obedience,socialization, addressing specific behaviors, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  Have you tried any training methods or classes before?
                </label>
                <textarea
                  name="prev_training"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="What worked or didn’t work?"
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  How does your dog behave around new people and other dogs?
                </label>
                <textarea
                  name="behavior"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., friendly, fearful, aggressive, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  Are there any situations that trigger negative behaviors in
                  your dog?
                </label>
                <textarea
                  name="triggers"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., loud noises, strangers, other dogs, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  Does your dog have any fears or anxieties?
                </label>
                <textarea
                  name="fears"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., separation, thunderstorms, car rides, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  What type of training are you interested in?
                </label>
                <div className="m-2 flex flex-col">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      name="private_training_yes"
                      className="mr-2"
                    />
                    <label>In-Home Private Training</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="board_and_train_yes"
                      className="mr-2"
                    />
                    <label>In-Home Board and Train</label>
                  </div>
                </div>
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">What motivates your dog most?</label>
                <div className="m-2 flex flex-col">
                  <div className="flex items-center mb-2">
                    <input type="checkbox" name="food_yes" className="mr-2" />
                    <label>Food</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" name="toy_yes" className="mr-2" />
                    <label>Toys</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="affection_yes"
                      className="mr-2"
                    />
                    <label>Affection</label>
                  </div>
                </div>
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  How much time can you commit to training each week?
                </label>
                <textarea
                  name="time"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="e.g., 15 minutes a day, 1 hour a day, 2 hours a day, etc."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  Is there anything else we should know about your dog or
                  training needs?
                </label>
                <textarea
                  name="message"
                  className="my-2 border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900 resize-none overflow-hidden"
                  placeholder="Any additional information you would like to share."
                  required
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <button
                  type="submit"
                  value="Send"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Send
                </button>
              </div>
            </form>
            {message && (
              <div className="m-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
