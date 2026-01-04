import { MapPin, Clock, Shield, Headphones } from 'lucide-react';

const badges = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Track your shipments live',
  },
  {
    icon: Clock,
    title: 'Guaranteed On-Time',
    description: 'Timely deliveries always',
  },
  {
    icon: Shield,
    title: 'Verified Fleet',
    description: 'Safe & reliable vehicles',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8 tracking-wider uppercase">
          Trust & Connect
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="group bg-background rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                {badge.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
