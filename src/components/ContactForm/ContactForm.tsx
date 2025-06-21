import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jc7l3kp", "template_72e2xv8", form.current, {
        publicKey: "qPgs3lVpIoz_k6CVe",
      })
      .then(
        () => {
          showAlert();
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const alert = document.getElementById(
    "alert-send-message"
  ) as HTMLElement | null;
  // Función para cerrar la alerta de mensaje enviado en el formulario de contacto
  const closeAlert = () => {
    if (alert) {
      alert.style.display = "none";
    }
  };
  // Función para mostrar la alerta de mensaje enviado con éxito en el formulario de contacto
  const showAlert = () => {
    if (alert) {
      alert.style.display = "flex";
    }
  };

  return (
    <section
      className="relative z-10 overflow-hidden py-20 lg:py-[120px]"
      id="contacto"
    >
      <div className="container mx-auto">
        <div
          id="alert-send-message"
          className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 hidden"
          role="alert"
        >
          <svg
            className="shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
            Mensaje enviado correctamente.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-3"
            aria-label="Close"
            onClick={closeAlert}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="-mx-4 flex flex-wrap lg:justify-around">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0 text-left">
              <h1 className="mb-6 text-dark text-4xl font-semibold dark:text-white">
                Datos de contacto
              </h1>
              <br />
              <br />
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <DevicePhoneMobileIcon className="h-10 w-10" />
                </div>
                <div className="w-full">
                  {/* <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Número telefónico
                  </h4> */}
                  <p className="text-base text-body-color dark:text-dark-6 mt-5">
                    +58 414 3003030
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <EnvelopeIcon className="h-10 w-10" />
                </div>
                <div className="w-full">
                  {/* <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Correo electrónico
                  </h4> */}
                  <p className="text-base text-body-color dark:text-dark-6 mt-5">
                    sbetancourt776@gmail.com
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-sm bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <MapPinIcon className="h-10 w-10" />
                </div>
                <div className="w-full">
                  {/* <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Correo electrónico
                  </h4> */}
                  <p className="text-base text-body-color dark:text-dark-6 mt-5">
                    Caracas, Venezuela
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg p-8 shadow-lg sm:p-12 dark:bg-gray-900 bg-white">
              <form ref={form} onSubmit={sendEmail} novalidate>
                <div className="mb-6">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nombre"
                    className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                    required
                  />
                  <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                  </span>
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Correo Electrónico"
                    className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Teléfono"
                    className="w-full rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    required
                    pattern="[0-9]"
                    title="No puede estar vacío, solo se aceptan números y debe tener el formato 58 4143003080"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Mensaje"
                    className="w-full resize-none rounded-lg border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-primary p-3 text-dark transition hover:bg-primary/90 cursor-pointer hover:bg-gray-900 hover:text-white dark:border-primary dark:text-white dark:hover:bg-primary dark:hover:text-gray-900 dark:hover:bg-white inline-flex justify-center lineheight-6 group-invalid:pointer-events-none group-invalid:opacity-30"
                  >
                    Enviar
                    <ArrowRightIcon className="h-5 w-4 ml-1" />
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -right-9 -top-10 z-[-1]">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#bfbfbf"
                    />
                  </svg>
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <svg
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.9993"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#000"
                    />
                  </svg>
                </span>
                <span className="absolute -bottom-7 -left-7 z-[-1]">
                  <svg
                    width="107"
                    height="134"
                    viewBox="0 0 107 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="104.999"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 104.999 132)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 104.999 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 104.999 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 104.999 88)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 104.999 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 104.999 45)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 104.999 16)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 104.999 59)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 104.999 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="104.999"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 104.999 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 90.3333 132)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 90.3333 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 90.3333 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 90.3333 88)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 90.3333 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 90.3333 45)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 90.3333 16)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 90.3333 59)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 90.3333 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="90.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 90.3333 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 75.6654 132)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 75.6654 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 75.6654 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 75.6654 88)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 75.6654 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 75.6654 45)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 75.6654 16)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 75.6654 59)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 75.6654 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="75.6654"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 75.6654 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 60.9993 132)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 60.9993 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 60.9993 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 60.9993 88)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 60.9993 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 60.9993 45)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 60.9993 16)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 60.9993 59)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 60.9993 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="60.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 60.9993 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 46.3333 132)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="132"
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 46.3333 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 46.3333 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 46.3333 88)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="88"
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 46.3333 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 46.3333 45)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="45"
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 46.3333 16)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="16"
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 46.3333 59)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="59"
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 46.3333 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#000"
                    />
                    <circle
                      cx="46.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 46.3333 1.66665)"
                      fill="#000"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#000"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
