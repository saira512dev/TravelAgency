import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you build muscle, improve endurance, and boost overall strength through expert-led sessions that focus on proper form, progressive resistance, and functional movement",
    image: image1,
  },
  {
    name: "Training Classes",
    description:
      "Our weight training classes are designed to help you build muscle, improve endurance, and boost overall strength through expert-led sessions that focus on proper form, progressive resistance, and functional movement",
    image: image2,
  },
  {
    name: "Fitness Classes",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our weight training classes are designed to help you build muscle, improve endurance, and boost overall strength through expert-led sessions that focus on proper form, progressive resistance, and functional movement",
    image: image4,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our weight training classes are designed to help you build muscle, improve endurance, and boost overall strength through expert-led sessions that focus on proper form, progressive resistance, and functional movement",
    image: image5,
  },
  {
    name: "Yoga Classes",
    description:
      "Our weight training classes are designed to help you build muscle, improve endurance, and boost overall strength through expert-led sessions that focus on proper form, progressive resistance, and functional movement",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our classes are designed to energize, challenge, and support
              you—no matter your fitness level. From high-intensity training to
              calming yoga sessions, each class is led by expert instructors who
              keep you motivated and moving. Discover the perfect workout for
              your goals and enjoy every step of the way.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="flex min-w-max gap-4">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description || ""}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
