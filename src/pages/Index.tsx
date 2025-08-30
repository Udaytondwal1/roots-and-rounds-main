import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

// Import all images
import farmerBobsLogo from "@/assets/farmer-bobs-official-logo.png";
import heroPeppercorns from "@/assets/top deals/heena leaves.png";
import lemonBioenzyme from "@/assets/top deals/lemon bioenzyme.png";
import signatureCoffee from "@/assets/top deals/signature roast coffee.png";
import signatureCoffee2 from "@/assets/best-seller/signature roasted coffee.png";
import greenCoffeeBeans from "@/assets/top deals/green coffee beans.png";
import spiceJars from "@/assets/spice-jars.jpg";
import redHibiscus from "@/assets/featured-product/red hibiscus ferment.png";
import corianderPowder from "@/assets/featured-product/corinder.png";
import garamMasala from "@/assets/featured-product/light roasted gaaram masala.png";
import birdsEyeChilli from "@/assets/featured-product/bird eye chilly.png";
import fruitPreserves from "@/assets/fruit-preserves.jpg";
import bigCardamom from "@/assets/best-seller/big cardamom.png";
import starFruitPickle from "@/assets/best-seller/star fruit pickle.png";
import pineappleJam from "@/assets/best-seller/pineapple jam.png";
import cocoaPods from "@/assets/top deals/gournment.png";
import farmhouse from "@/assets/farmhouse.jpg";
import beveragesCategory from "@/assets/categories/breverage.png";
import organicStore from "@/assets/top deals/organic store.png";
import skincareProducts from "@/assets/top deals/skincare .png";
import Peppercorns from "@/assets/categories/jam.png";
import honey from "@/assets/categories/honey.png";
import juice from "@/assets/categories/juice.png";
import papadum from "@/assets/categories/papadum.png";

const heroImages = [
  {
    src: "https://setmycart.blob.core.windows.net/smcproduction//5-22-2025/70d7f8d2d84f41cf8d77d9f4f4ff8c62/farmerbob%20banner.webp",
    alt: "Black Peppercorns",
    // Optionally add title/description if needed
  },
  {
    src: "https://setmycart.blob.core.windows.net/smcproduction//8-20-2025/ff5c71bc7652447d8b45d283d314af90/Web_Banner_2_11zon.jpg",
    alt: "Lemon Bioenzyme",
  },
  {
    src: "https://setmycart.blob.core.windows.net/smcproduction//8-20-2025/bc9ed334ed1f4e10a52b5f7745f61173/Web_Banner_3_11zon.jpg",
    alt: "Signature Roast Coffee",
  },
];

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  const handlePrev = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-20">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/lovable-uploads/a49e1cfe-091b-4af5-8481-4f6deebad4d9.png"
              alt="Farmer Bob's Organics"
              className="max-[575px]:w-[25%] w-auto min-[1050px]:w-[30%]"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
          </nav>
          <Menu className="md:hidden w-6 h-6 text-foreground" />
        </div>
      </header>

      {/* Hero Banner Carousel */}
      <section
        className="relative aspect-[8/3] bg-contain bg-no-repeat w-full flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[heroIndex].src})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full flex items-center justify-between">
          {/* Left Scroll Button */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-colors absolute left-4 top-1/2 -translate-y-1/2 z-20"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Centered content (optional: add text here if needed) */}
          <div className="flex-1 flex justify-center">
            {/* Optionally add title/description for each image */}
            {/* <div className="text-center text-white">
              <h1 className="mb-4">{heroImages[heroIndex].alt}</h1>
            </div> */}
          </div>
          {/* Right Scroll Button */}
          <button
            aria-label="Next"
            onClick={handleNext}
            className="bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-colors absolute right-4 top-1/2 -translate-y-1/2 z-20"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${
                idx === heroIndex ? "bg-primary" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Top Deals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>TOP DEALS</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              image={lemonBioenzyme}
              name="Lemon Bioenzyme"
              price="₹299"
              originalPrice="₹399"
            />
            <ProductCard
              image={signatureCoffee}
              name="Signature Roast Coffee"
              price="₹599"
            />
            <ProductCard
              image={greenCoffeeBeans}
              name="Green Coffee Beans"
              price="₹449"
              originalPrice="₹549"
            />
            <ProductCard
              image={heroPeppercorns}
              name="Henna Leaves"
              price="₹199"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>Featured Products</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              image={redHibiscus}
              name="Red Hibiscus Ferment"
              price="₹399"
            />
            <ProductCard
              image={corianderPowder}
              name="Coriander Powder"
              price="₹149"
            />
            <ProductCard image={garamMasala} name="Garam Masala" price="₹199" />
            <ProductCard
              image={birdsEyeChilli}
              name="Bird's Eye Chilli"
              price="₹249"
            />
          </div>
        </div>
      </section>

      {/* Monthly Subscription */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={spiceJars}
              alt="Monthly Spice Subscription"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="mb-4">Monthly Subscriptions</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get fresh organic spices, herbs, and specialty products delivered
              to your door every month. Discover new flavors and never run out
              of your favorites.
            </p>
            <Button size="lg" className="px-8">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>Shop by Category</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={beveragesCategory}
                  alt="Beverages"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Beverages</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={spiceJars}
                  alt="Spices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Spices</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={Peppercorns}
                  alt="Black Peppercorn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Jams</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={honey}
                  alt="Black Peppercorn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Honey</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={juice}
                  alt="Black Peppercorn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Juices</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative aspect-[4/3]">
                <img
                  src={papadum}
                  alt="Papadum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="mb-2 text-white">Papadums</h3>
                    <span className="text-sm underline">View Products</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>Best Sellers</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              image={signatureCoffee2}
              name="Signature Roast Coffee"
              price="₹599"
            />
            <ProductCard image={bigCardamom} name="Big Cardamom" price="₹349" />
            <ProductCard
              image={starFruitPickle}
              name="Star Fruit Pickle"
              price="₹279"
            />
            <ProductCard
              image={pineappleJam}
              name="Pineapple Jam"
              price="₹329"
            />
          </div>
        </div>
      </section>

      {/* Gourmet */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>Gourmet – Recipes and More</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={cocoaPods}
                alt="Cocoa Processing"
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p className="text-foreground">
                  Open fresh cocoa fruit and extract the beans
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p className="text-foreground">
                  Dry the cocoa beans under the natural sun
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p className="text-foreground">
                  Roast the dried beans to perfection
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <p className="text-foreground">
                  Create your own homemade chocolate delicacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2>Testimonials</h2>
            <div className="w-12 h-px bg-primary mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestimonialCard
              product="Avocados"
              rating={5}
              review="Fresh and creamy avocados that are perfect for my daily smoothies. The quality is consistently excellent."
              reviewer="Sarah Johnson"
              location="Mumbai"
              productImage={fruitPreserves}
            />
            <TestimonialCard
              product="Coffee Powder"
              rating={5}
              review="The aroma is incredible and the taste is rich and smooth. Best coffee I've had in years!"
              reviewer="Raj Patel"
              location="Delhi"
              productImage={signatureCoffee}
            />
            <TestimonialCard
              product="Spices"
              rating={5}
              review="Authentic flavors that remind me of my grandmother's cooking. Fresh and aromatic spices."
              reviewer="Priya Sharma"
              location="Bangalore"
              productImage={garamMasala}
            />
            <TestimonialCard
              product="Organic Produce"
              rating={5}
              review="Everything is so fresh and organic. I can taste the difference in quality immediately."
              reviewer="Michael Chen"
              location="Chennai"
              productImage={fruitPreserves}
            />
          </div>
        </div>
      </section>

      {/* Stay at The Farm */}
      {/*<section className="py-16 px-4 bg-green-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={farmhouse} alt="Farm Stay" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="mb-2">Stay at The Farm!</h2>
            <h3 className="text-muted-foreground mb-4">Walk among centuries-old trees</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experience authentic farm life in our heritage farmhouse surrounded by ancient trees. 
              Wake up to the sounds of nature and enjoy farm-to-table meals.
            </p>
            <Button size="lg" className="px-8">
              Book Now
            </Button>
          </div>
        </div>
      </section>*/}

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Farm Stay Card */}

            <div className="group relative overflow-hidden rounded-radius-xl shadow-organic-lg hover:shadow-organic-xl transition-all duration-500 cursor-pointer rounded-xl">
              {/* Background Image */}

              <div className="aspect-[16/9] lg:aspect-[2/1] relative">
                <img
                  src="https://setmycart.blob.core.windows.net/smcstage//8-29-2025/92021ec67c0f497f925285d6083d6922/9c450565-45c0-4180-a682-0a2188292e47%20(1).webp"
                  alt="Beautiful farmhouse stay surrounded by organic gardens"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Base Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Hover Overlay */}

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Default Content */}

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 rounded-lg">
                <div className="space-y-4 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      Stay at The Farm!
                    </h2>

                    <p className="text-lg lg:text-xl text-white/90 font-medium">
                      Walk among centuries-old trees
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-radius-lg shadow-organic transition-all duration-200 hover:shadow-organic-lg hover:-translate-y-0.5 w-fit"
                  >
                    BOOK NOW
                  </Button>
                </div>
                {/* Hover Content */}

                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:p-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 rounded-xl">
                  <div className="bg-white/95 backdrop-blur-sm rounded-radius-lg p-6 lg:p-8 max-w-2xl text-center shadow-organic-lg rounded-xl">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                      Stay at The Farm!
                    </h3>

                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                      Immerse yourself in our organic paradise surrounded by
                      flourishing fruit trees, aromatic coffee & pepper
                      plantations, thriving vegetable gardens, fragrant herb
                      patches, and colorful flowering plants. Experience farm
                      life in centuries-old natural beauty.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          🌳 Ancient fruit orchards
                        </span>
                        <span className="flex items-center gap-1">
                          ☕ Coffee plantations
                        </span>
                        <span className="flex items-center gap-1">
                          🌿 Herb gardens
                        </span>
                      </div>

                      <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          🥬 Organic vegetables
                        </span>
                        <span className="flex items-center gap-1">
                          🌶️ Pepper plantations
                        </span>
                        <span className="flex items-center gap-1">
                          🌸 Flowering gardens
                        </span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-radius-lg shadow-organic transition-all duration-200 hover:shadow-organic-lg hover:-translate-y-0.5"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              {/* Corner Badge */}

              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-radius-md text-sm font-semibold shadow-organic rounded-xl">
                Farm Stay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div
                className="relative aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${organicStore})` }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="mb-4 text-white">100% Organic</h3>
                    <Button
                      variant="outline"
                      className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-lg border border-border-light hover:opacity-90 transition-opacity cursor-pointer">
              <div
                className="relative aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${skincareProducts})` }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="mb-4 text-white">
                      New Organic Skincare Products
                    </h3>
                    <Button
                      variant="outline"
                      className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hand-Crafted With Love */}
      <section className="py-16 px-4 bg-green-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Hand-Crafted With Love</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our bespoke fruit preserves are made in small batches using
            traditional methods passed down through generations. Each jar
            contains the pure essence of handpicked fruits.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <img
              src={fruitPreserves}
              alt="Artisanal Fruit Preserves"
              className="w-full rounded-lg"
            />
          </div>
          <Button variant="outline" size="lg" className="px-8">
            Connect With Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="/">
                <img
                  src="/lovable-uploads/a49e1cfe-091b-4af5-8481-4f6deebad4d9.png"
                  alt="Farmer Bob's Organics"
                  className="h-8 w-auto mb-2"
                />
              </a>
              <p className="text-sm text-muted-foreground">
                We Care For You Like Your Grandmother Does!
              </p>
            </div>

            <div>
              <h4 className="mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping & Refunds
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-3">Know More</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border-light text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 farmerbobsorganics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
