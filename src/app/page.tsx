"use client";

import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server.");
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="https://res.cloudinary.com/dagqggf4w/video/upload/v1751797849/bg_video_ccenrt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-7xl px-8 py-24">
          <h1 className="text-5xl font-bold mb-16 text-center text-[#6C5CE7]">
            Welcome to OCTARISE
          </h1>

          <div className="flex flex-col md:flex-row justify-between gap-20 text-gray-200">
            <div className="flex-1 min-w-0 space-y-6 text-left pr-8 border-r border-purple-500">
              <p className="text-2xl leading-relaxed">
                &quot;Innovating software and orchestrating unforgettable events — for dreams
                that reach beyond the stars. We combine technology with creativity to
                deliver experiences that truly inspire.&quot;
              </p>
            </div>
            <div className="flex-1 min-w-0 space-y-8 text-left px-8 border-r border-purple-500">
              <p className="text-2xl leading-relaxed">
                &quot;Crafting exquisite digital experiences — from personal portfolios that
                illuminate student talent, to robust commercial websites that elevate
                your brand presence with style and functionality.&quot;
              </p>

              <p className="text-xl font-semibold italic text-purple-400">
                “Good design is obvious. Great design is transparent.”
              </p>
            </div>
            <div className="flex-1 min-w-0 space-y-6 text-left pl-8">
              <p className="text-2xl leading-relaxed">
                &quot;Meticulously curating intimate parties and joyous celebrations, where
                every detail is thoughtfully crafted to linger in hearts long after the
                last light fades.&quot;
              </p>

              <p className="text-xl font-semibold italic text-purple-400">
                &ldquo;We don&rsquo;t just plan events; we craft memories.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32">
        <div className="relative flex flex-col md:flex-row items-left justify-left">
          <div className="w-full md:w-1/2 h-96 bg-[url('/about_us.jpg')] bg-cover bg-center rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#4E3DAA]/30 rounded-lg"></div>
            <h2 className="relative z-10 text-5xl font-bold text-white">ABOUT US</h2>
          </div>

          <div className="w-full md:w-1/2 bg-[#5B4BC0] p-10 rounded-lg shadow-2xl md:absolute md:left-1/2 md:top-8 border border-[#6C5CE7]/50">
            <p className="text-lg text-gray-300 leading-relaxed space-y-4">
              At Octarise, we blend technical excellence with creative energy to deliver
              outstanding software and memorable events. Our team thrives on turning ideas
              into vibrant realities that inspire and resonate.<br /><br />
              Beyond crafting robust digital solutions, we are passionate about
              orchestrating elegant events — from intimate gatherings to grand
              celebrations. We handle every detail with meticulous care, ensuring
              experiences that leave lasting impressions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-40">
          <div className="bg-[#1B223A] p-6 rounded-lg shadow-md border border-[#6C5CE7]/30 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-[#00CEC9]">Our Vision</h3>
            <p className="text-gray-300">
              To be a global leader in technology and event management, empowering businesses
              and enriching lives through cutting-edge innovation and creative solutions.
            </p>
          </div>
          <div className="bg-[#1B223A] p-6 rounded-lg shadow-md border border-[#6C5CE7]/30 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-[#6C5CE7]">Our Mission</h3>
            <p className="text-gray-300">
              Deliver exceptional software solutions and create memorable events that exceed
              expectations through dedication, passion, and excellence.
            </p>
          </div>
          <div className="bg-[#1B223A] p-6 rounded-lg shadow-md border border-[#6C5CE7]/30 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-[#00CEC9]">Why Choose Us</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Expert team with diverse industry experience</li>
              <li>Tailored solutions that meet your unique goals</li>
              <li>Consistent quality and innovative approaches</li>
              <li>Transparent communication & dedicated support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dagqggf4w/video/upload/v1751797629/services_bg_injt9g.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition">
              <h3 className="text-2xl font-semibold mb-2">Octarise Software Solutions Pvt.ltd</h3>
              <p className="mb-6">
                From elegant personal portfolios to powerful commercial applications,
                we build digital experiences tailored to your goals. Our designs combine
                aesthetic excellence with cutting-edge tech.
              </p>
              <Link href="/software">
                <button className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="p-6 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition">
              <h3 className="text-2xl font-semibold mb-2">Octarise Events</h3>
              <p className="mb-6">
                We craft memorable celebrations — from intimate gatherings to large-scale
                productions. Every event is a story woven with creativity and attention
                to detail, leaving lasting impressions.
              </p>
              <Link href="/events">
                <button className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F2C] backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-[#6C5CE7] mb-4">CONTACT US</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let’s bring your vision to life. Fill in your details or reach out directly —
              we’re excited to collaborate with you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-white/10 border border-white/30 p-8 rounded-lg max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border p-3 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border p-3 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-transparent border p-3 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border p-3 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#6C5CE7] hover:bg-[#5b4bd1] text-white font-semibold py-3 px-8 rounded transition mx-auto"
            >
              Send Message
            </button>
            {status && <p className="text-gray-300 mt-2">{status}</p>}
          </form>

          <div className="space-y-2 text-gray-300 mt-12">
            <p className="text-lg"><strong>Call us at Phone:</strong> +91 XXXXXXXXXX</p>
            <p className="text-lg"><strong>TEAM OCTARISE</strong></p>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="socials" className="py-10 px-6 bg-[#0A0F2C] text-center space-y-5">
        <h3 className="text-3xl font-bold text-[#6C5CE7] mb-6">
          Connect with us on Instagram
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
          {/* Software Solutions IG */}
          <div className="flex flex-col items-center space-y-3 bg-white/10 border border-white/20 p-6 rounded-lg hover:bg-[#6C5CE7]/10 transition">
            <svg
              className="w-10 h-10 text-[#6C5CE7]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-3.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Z" />
            </svg>
            <h4 className="text-xl font-semibold text-[#00CEC9]">Software Solutions</h4>
            <a
              href="https://www.instagram.com/octarise_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#6C5CE7] transition"
            >
              @octarise_solutions
            </a>
          </div>

          {/* Events IG */}
          <div className="flex flex-col items-center space-y-3 bg-white/10 border border-white/20 p-6 rounded-lg hover:bg-[#6C5CE7]/10 transition">
            <svg
              className="w-10 h-10 text-[#6C5CE7]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-3.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Z" />
            </svg>
            <h4 className="text-xl font-semibold text-[#00CEC9]">Event Management</h4>
            <a
              href="https://www.instagram.com/octarise_events?utm_source=qr&igsh=b2JoeWdoaXI2YXY1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#6C5CE7] transition"
            >
              @octarise_events
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
