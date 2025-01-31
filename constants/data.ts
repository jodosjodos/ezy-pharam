import { Hospital } from "@/interface/hospital.js";
import { Profile,Faisal } from "./images.js";

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
    image: Faisal,
  },
  {
    id: 3,
    name: "Rwanda Military Hospital",
    service: "Orthopedics",
    location: "Kanombe, Kigali",
    rating: 4.0,
    image: Faisal,
  },
  {
    id: 4,
    name: "Biryogo Health Center",
    service: "Maternal & Child Health",
    location: "Kigali",
    rating: 3.8,
    image: Faisal,
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
    image: Faisal,
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
    image: Faisal,
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
    image: Faisal,
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
