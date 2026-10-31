import { useState } from "react";
import "./App.css";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    description: "Comfortable room with modern facilities.",
  },
  {
    name: "Luxury Suite",
    price: "₹4,000",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900",
    description: "Enjoy a premium luxury experience.",
  },
  {
    name: "Family Room",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900",
    description: "Spacious room for your family.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
  });

  const whatsappNumber = "917040710511";

  function handleBooking(e) {
    e.preventDefault();

    const message = `
Hotel Booking Enquiry



Name:     ${booking.name}
Phone: ${booking.phone}
Check-in: ${booking.checkin}
Check-out: ${booking.checkout}
Guests: ${booking.guests}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          Grand Palace
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </a>

          <a href="#facilities" onClick={() => setMenuOpen(false)}>
            Facilities
          </a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>
            Booking
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO GRAND PALACE</p>
            <h1>Your Perfect Stay Starts Here</h1>
            <p>Experience comfort, luxury and unforgettable hospitality.</p>
            <a href="#rooms" className="primary-button">
              Explore Our Rooms
            </a>
          </div>
        </section>

        <section className="section about">
          <p className="eyebrow">ABOUT OUR HOTEL</p>
          <h2>Comfort Meets Luxury</h2>
          <p>
            Enjoy beautiful rooms, delicious food and excellent hospitality. We
            make every stay special.
          </p>
        </section>

        <section className="section rooms" id="rooms">
          <p className="eyebrow">OUR ACCOMMODATION</p>
          <h2>Choose Your Room</h2>

          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.name}>
                <img src={room.image} alt={room.name} />
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <strong>{room.price} / night</strong>
                  <a href="#booking" className="room-button">
                    Enquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="facilities section" id="facilities">
          <p className="eyebrow">HOTEL AMENITIES</p>
          <h2>Our Facilities</h2>
          <div className="facility-grid">
            <div>
              📶 <h3>Free Wi-Fi</h3>
            </div>
            <div>
              🍽️ <h3>Restaurant</h3>
            </div>
            <div>
              🚗 <h3>Free Parking</h3>
            </div>
            <div>
              🏊 <h3>Swimming Pool</h3>
            </div>
          </div>
        </section>

        <section className="booking section" id="booking">
          <p className="eyebrow">RESERVE YOUR STAY</p>
          <h2>Send a Booking Enquiry</h2>
          <p>Fill in your details and continue through WhatsApp.</p>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Your full name"
              required
              value={booking.name}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  name: e.target.value,
                })
              }
            />

            <input
              type="tel"
              placeholder="Mobile number"
              required
              pattern="[0-9+ -]{7,20}"
              value={booking.phone}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  phone: e.target.value,
                })
              }
            />

            <label>Check-in date</label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={booking.checkin}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  checkin: e.target.value,
                })
              }
            />

            <label>Check-out date</label>
            <input
              type="date"
              required
              min={booking.checkin || new Date().toISOString().split("T")[0]}
              value={booking.checkout}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  checkout: e.target.value,
                })
              }
            />

            <label>Number of guests</label>
            <select
              value={booking.guests}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  guests: e.target.value,
                })
              }
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>

            <button type="submit" className="primary-button">
              Send Enquiry on WhatsApp
            </button>
          </form>
        </section>

        <section className="contact section" id="contact">
          <h2>We Would Love to Welcome You</h2>
          <p>📍 Your Hotel Address, Your City</p>
          <p>📞 +91 7040710511</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Chat With Us
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Grand Palace Hotel. All Rights Reserved.</p>
        <p>Designed with ❤️ for a comfortable stay.</p>
      </footer>
    </>
  );
}

export default App;
