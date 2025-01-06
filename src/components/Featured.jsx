import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Featured = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const items = [
    {
      title: "Signature Latte",
      description: "House-made vanilla syrup, espresso, and silky steamed milk",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3",
    },
    {
      title: "Artisan Pour Over",
      description: "Single-origin beans, hand-poured to perfection",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
    },
    {
      title: "House Blend",
      description: "Our signature blend, roasted in small batches daily",
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="py-20 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1e3932]">
          Featured Drinks
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#1e3932]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
