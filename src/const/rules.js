import {
  Clock,
  CalendarCheck,
  ShieldAlert,
  Activity,
  Handshake,
  Ban,
  Coffee,
  PawPrint,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";

export const policies = [
  {
    title: "1. Time Management",
    desc: "Please begin and end your session on time, and kindly vacate the court once your slot concludes.",
    icon: Clock,
  },
  {
    title: "2. Booking Policy",
    desc: "Cancellations or reschedules must be made at least 24 hours in advance.",
    icon: CalendarCheck,
  },
  {
    title: "3. Operator Rights",
    desc: "Management may reschedule or cancel sessions due to unforeseen circumstances. Refunds will be provided when applicable.",
    icon: ShieldAlert,
  },
  {
    title: "4. Equipment & Safety",
    desc: "Use approved equipment and ensure you are physically fit before playing. Participation is at your own risk.",
    icon: Activity,
  },
  {
    title: "5. Respectful Conduct",
    desc: "Maintain good sportsmanship. Any form of aggression or abusive behavior will not be tolerated.",
    icon: Handshake,
  },
  {
    title: "6. No Weapons & Substance Use",
    desc: "Weapons, drugs, or alcohol of any kind are strictly prohibited within the facility.",
    icon: Ban,
  },
  {
    title: "7. No Outside F&B",
    desc: "External food and beverages are not allowed. Please purchase F&B from our facility only.",
    icon: Coffee,
  },
  {
    title: "8. Pets Are Allowed",
    desc: "Pets are permitted within the facility. Owners are fully responsible for their pets at all times.",
    icon: PawPrint,
  },
  {
    title: "9. Personal Liability",
    desc: "The facility is not liable for lost, stolen, or damaged personal belongings.",
    icon: AlertTriangle,
  },
  {
    title: "10. Event & Sponsorship Policy",
    desc: "Any event or sponsorship involving product sales must have prior approval from management.",
    icon: BadgeCheck,
  },
];
