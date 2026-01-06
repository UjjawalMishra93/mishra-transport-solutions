import { Package, TrendingUp, MapPin, Truck, Clock, Shield } from 'lucide-react';

const categories = [
  'Pan-India Network',
  'Real-Time Tracking',
  'On-Time Delivery',
  'Verified Fleet',
  'Safe Transport',
  '24/7 Support',
];

const features = [
  {
    number: '1',
    title: 'Real-Time Tracking',
    description:
      'Monitor your shipments live with GPS precision. Get instant updates on location, estimated delivery time, and route progress.',
    mockup: {
      icon: MapPin,
      label: 'Live Location',
      value: 'Mumbai → Delhi',
      status: 'In Transit',
      percentage: '65%',
      color: 'from-green-400 to-green-600',
    },
  },
  {
    number: '2',
    title: 'Fleet Management',
    description:
      'Access our diverse fleet of vehicles — from mini trucks to heavy-duty carriers. All vehicles are GPS-enabled and regularly maintained.',
    mockup: {
      icon: Truck,
      items: [
        { name: 'Mini Truck', status: 'Available', count: 12 },
        { name: 'Medium Truck', status: 'Available', count: 8 },
        { name: 'Heavy Truck', status: 'In Use', count: 5 },
      ],
      color: 'from-blue-400 to-blue-600',
    },
  },
  {
    number: '3',
    title: 'Analytics Dashboard',
    description:
      'Stay in control with insights across your shipments — from delivery times to cost analysis, all in one powerful dashboard.',
    mockup: {
      icon: TrendingUp,
      stats: [
        { label: 'Total Shipments', value: '10,000+' },
        { label: 'On-Time Rate', value: '98%' },
        { label: 'Active Routes', value: '24' },
      ],
      color: 'from-purple-400 to-purple-600',
    },
  },
];

const TrustBadges = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <Package className="w-4 h-4 text-[#ff6b2b]" />
            <span className="text-sm font-medium text-gray-700">BUILT FOR LOGISTICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            An entire stack of tools that keep
            <br />
            your{' '}
            <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#ff6b2b] to-[#ff8f5a] rounded-2xl mx-2 align-middle">
              <Truck className="w-7 h-7 text-white" />
            </span>{' '}
            shipments moving
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300
                ${index === 0
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="group animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                    {feature.number}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mockup Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Mockup for Feature 1 - Tracking */}
                {feature.number === '1' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.mockup.color} flex items-center justify-center`}
                      >
                        <feature.mockup.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">
                          {feature.mockup.label}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {feature.mockup.value}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {feature.mockup.status}
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          {feature.mockup.percentage}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                          style={{ width: feature.mockup.percentage }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup for Feature 2 - Fleet */}
                {feature.number === '2' && (
                  <div className="space-y-3">
                    {feature.mockup.items?.map((item, idx) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.mockup.color} flex items-center justify-center`}
                          >
                            <Truck className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">{item.status}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${item.status === 'Available'
                                ? 'bg-green-500'
                                : 'bg-orange-500'
                              }`}
                          />
                          <span className="text-sm font-bold text-gray-900">
                            {item.count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mockup for Feature 3 - Dashboard */}
                {feature.number === '3' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500">
                        Performance
                      </span>
                      <button className="px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Export
                      </button>
                    </div>
                    {feature.mockup.stats?.map((stat, idx) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                      >
                        <span className="text-sm text-gray-600">{stat.label}</span>
                        <span className="text-lg font-bold text-gray-900">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">100%</p>
            <p className="text-sm text-gray-600">Insured</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">98%</p>
            <p className="text-sm text-gray-600">On-Time</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">50+</p>
            <p className="text-sm text-gray-600">Vehicles</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">10K+</p>
            <p className="text-sm text-gray-600">Deliveries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
