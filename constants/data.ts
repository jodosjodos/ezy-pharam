import { Hospital } from "@/interface/hospital.js";
import { Profile, Faisal, Kanombe, ArticleImg } from "./images.js";
import { Article } from "@/interface/article.js";

export const ProfileData = {
  username: "john",
  fullName: "John Doe",
  email: "johndoe@gmail.com",
  createdAt: "2021",
  phoneNumber: "0781234567",
  profile: Profile,
};
export const faqs = [
  {
    question: "What services does the EzyPharma app offer",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "How do i order medications through the app?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "How does the diet suggestion feature work?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "How does the reminder system work?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "What delivery options are available?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Our app serves as a centralized platform for integrated referral hospitals and online pharmacies, offering a range of services. You can conveniently order your medications, receive personalized diet suggestions based on your prescribed medications, set medication reminders, and enjoy medicine delivery at large discount.",
  },
];
export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "King Faisal Hospital",
    service: "Cardiologist",
    location: "Kigali",
    rating: 3.7,
    image: Faisal,
  },
  {
    id: 2,
    name: "University Teaching Hospital of Kigali (CHUK)",
    service: "General Medicine",
    location: "Kigali",
    rating: 4.2,
    image: Kanombe,
  },
  {
    id: 3,
    name: "Rwanda Military Hospital",
    service: "Orthopedics",
    location: "Kanombe",
    rating: 4.0,
    image: Faisal,
  },
  {
    id: 4,
    name: "Biryogo Health Center",
    service: "Maternal & Child Health",
    location: "Kigali",
    rating: 3.8,
    image: Kanombe,
  },
  {
    id: 5,
    name: "Butaro Cancer Center of Excellence",
    service: "Oncology",
    location: "Burera",
    rating: 4.5,
    image: Faisal,
  },
  {
    id: 6,
    name: "Muhima Hospital",
    service: "Maternity & Gynecology",
    location: "Kigali",
    rating: 4.1,
    image: Kanombe,
  },
  {
    id: 7,
    name: "Gahini Hospital",
    service: "Rehabilitation & Physiotherapy",
    location: "Kayonza",
    rating: 4.0,
    image: Faisal,
  },
  {
    id: 8,
    name: "Kabgayi Hospital",
    service: "Ophthalmology",
    location: "Muhanga",
    rating: 3.9,
    image: Kanombe,
  },
  {
    id: 9,
    name: "Ruhengeri Hospital",
    service: "Emergency & Trauma",
    location: "Musanze",
    rating: 4.3,
    image: Faisal,
  },
  {
    id: 10,
    name: "Kibagabaga Hospital",
    service: "Pediatrics",
    location: "Gasabo, Kigali",
    rating: 3.6,
    image: Kanombe,
  },
  {
    id: 11,
    name: "Nemba Hospital",
    service: "Surgery",
    location: "Gakenke",
    rating: 4.0,
    image: Faisal,
  },
];
export const articles = [
  {
    id: "1",
    date: "Jun 10, 2021",
    length: "5min read",
    image: ArticleImg,
    title: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
  },
  // {
  //   id: "2",
  //   date: "Jul 15, 2021",
  //   length: "7min read",
  //   image: ArticleImg,
  //   title: "10 Simple Ways to Improve Your Mental Health Daily",
  // },
  // {
  //   id: "3",
  //   date: "Aug 5, 2021",
  //   length: "6min read",
  //   image: ArticleImg,
  //   title: "The Best Superfoods for a Stronger Immune System",
  // },
  // {
  //   id: "4",
  //   date: "Sep 20, 2021",
  //   length: "8min read",
  //   image: ArticleImg,
  //   title: "How to Stay Hydrated: The Best Drinks for Your Health",
  // },
  // {
  //   id: "5",
  //   date: "Oct 10, 2021",
  //   length: "4min read",
  //   image: ArticleImg,
  //   title: "Why Sleep is the Key to a Healthier Life",
  // },
  // {
  //   id: "6",
  //   date: "Nov 25, 2021",
  //   length: "9min read",
  //   image: ArticleImg,
  //   title: "How to Build a Balanced Diet: Tips from Nutrition Experts",
  // },
  // {
  //   id: "7",
  //   date: "Dec 30, 2021",
  //   length: "5min read",
  //   image: ArticleImg,
  //   title: "The Science Behind Mindfulness and How It Improves Your Health",
  // },
  // {
  //   id: "8",
  //   date: "Jan 12, 2022",
  //   length: "6min read",
  //   image: ArticleImg,
  //   title: "The Best Workouts for Boosting Your Heart Health",
  // },
  // {
  //   id: "9",
  //   date: "Feb 18, 2022",
  //   length: "7min read",
  //   image: ArticleImg,
  //   title: "The Role of Gut Health in Your Overall Well-being",
  // },
  // {
  //   id: "10",
  //   date: "Mar 5, 2022",
  //   length: "10min read",
  //   image: ArticleImg,
  //   title: "Everything You Need to Know About Plant-Based Diets",
  // },
];
