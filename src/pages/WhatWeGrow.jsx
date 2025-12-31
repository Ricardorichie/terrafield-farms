import React, { useState } from 'react';
import { Section, Badge } from '../components/common/UI';
import CropCard from '../components/features/CropCard';
import { Check, Calendar, TrendingUp } from 'lucide-react';

const WhatWeGrow = () => {
    // Data matched to the Image 4 Mockup structure
    const allCrops = [
        // Short Term
        { 
            id: 1, 
            name: 'Roma Tomatoes', 
            description: 'High-yield variety suited for processing and fresh markets.',
            horizon: 'Short Term', 
            status: 'Active', 
            cycle: '3-4 Months', 
            marketUse: 'Fresh / Processing',
            image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop'
        },
        { 
            id: 2, 
            name: 'Habanero Peppers', 
            description: 'Spicy variety grown specifically for export quality standards.',
            horizon: 'Short Term', 
            status: 'Active', 
            cycle: '4-5 Months', 
            marketUse: 'Export / Spice',
            image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1000&auto=format&fit=crop'
        },
        // Mid Term
        { 
            id: 3, 
            name: 'Cassava', 
            description: 'Staple crop cultivated for starch production and garri.',
            horizon: 'Mid Term', 
            status: 'Active', 
            cycle: '9-12 Months', 
            marketUse: 'Starch / Flour',
            image: 'https://images.unsplash.com/photo-1726497573569-5e7040b8128b?auto=format&fit=crop&q=80&w=1600'
        },
        { 
            id: 4, 
            name: 'Hybrid Plantain', 
            description: 'Disease-resistant varieties for year-round harvesting.',
            horizon: 'Mid Term', 
            status: 'Planned', 
            cycle: '10-12 Months', 
            marketUse: 'Local Market',
            image: 'https://images.unsplash.com/photo-1590876609020-1bd83dadfe63?auto=format&fit=crop&q=80&w=1600'
        },
         // Long Term
        { 
            id: 5, 
            name: 'Oil Palm', 
            description: 'Large scale estate development for crude palm oil.',
            horizon: 'Long Term', 
            status: 'Planned', 
            cycle: '3-4 Years', 
            marketUse: 'Industrial Oil',
            image: 'https://images.unsplash.com/photo-1755365134255-df5efd13a4cb?auto=format&fit=crop&q=80&w=1600'
        },
        { 
            id: 6, 
            name: 'Cashew', 
            description: 'Premium variety for export and local processing units.',
            horizon: 'Long Term', 
            status: 'Planned', 
            cycle: '3+ Years', 
            marketUse: 'Export / Nuts',
            image: 'https://images.unsplash.com/photo-1666115390686-049677eb9380?auto=format&fit=crop&q=80&w=1600'
        }
    ];

    const [filter, setFilter] = useState('All Horizons');

    const filteredCrops = filter === 'All Horizons' 
        ? allCrops 
        : allCrops.filter(c => c.horizon === filter || c.status === filter);

  return (
    <>
      {/* Hero */}
      <div className="hero locations-hero" style={{minHeight: '450px', background: '#11291D'}}>
         <img src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?q=80&w=2600&auto=format&fit=crop" className="hero-bg" alt="What We Grow Hero" style={{filter: 'brightness(0.4)'}} />
         <div className="container hero-content" style={{alignItems: 'center', textAlign: 'center'}}>
            <h1 className="text-white" style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.03em'}}>What We Grow</h1>
            <p className="text-white" style={{fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', opacity: '0.9', fontWeight: '400'}}>
               Cultivating Excellence from Nigerian Soil.
            </p>
         </div>
      </div>

      <section className="section bg-light" style={{background: 'var(--color-bg-alt)'}}>
        <div className="container">
            
            {/* Filter Tabs */}
            <div className="flex justify-between items-center" style={{marginBottom: '3rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem'}}>
                <h2>Our Crop Portfolio</h2>
                <div style={{display: 'flex', gap: '0.5rem', background: '#e0e0e0', padding: '5px', borderRadius: '8px'}}>
                    {['All Horizons', 'Active Crops', 'Planned Projects'].map((f) => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f === 'Active Crops' ? 'Active' : f === 'Planned Projects' ? 'Planned' : 'All Horizons')}
                            style={{
                                padding: '10px 20px', 
                                borderRadius: '6px', 
                                fontWeight: 'bold', 
                                border: 'none',
                                background: (f === 'All Horizons' && filter === 'All Horizons') || (f === 'Active Crops' && filter === 'Active') || (f === 'Planned Projects' && filter === 'Planned') ? 'var(--color-primary)' : 'transparent',
                                color: (f === 'All Horizons' && filter === 'All Horizons') || (f === 'Active Crops' && filter === 'Active') || (f === 'Planned Projects' && filter === 'Planned') ? 'white' : '#666',
                                transition: 'all 0.2s'
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-3" style={{marginBottom: '6rem'}}>
                {filteredCrops.map((crop) => (
                    <div key={crop.id} className="crop-card">
                         <div className="crop-image">
                             {crop.image 
                                ? <img src={crop.image} alt={crop.name} />
                                : <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc'}}>No Image</div>
                             }
                             <div className="crop-badge">
                                <span className={`badge ${crop.status === 'Active' ? 'badge-accent' : 'badge-neutral'}`}>
                                    {crop.status}
                                </span>
                             </div>
                         </div>
                         <div className="crop-body">
                             <h3>{crop.name}</h3>
                             <p style={{fontSize: '0.9rem', color: '#666', lineHeight: '1.5', minHeight: '3rem'}}>{crop.description}</p>
                             
                             <div style={{borderTop: '1px solid #eee', marginTop: '1.5rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                                 <div className="flex justify-between items-center text-sm">
                                     <span style={{color: '#999', display: 'flex', alignItems: 'center', gap: '6px'}}><Calendar size={16} /> Cycle</span>
                                     <span style={{fontWeight: '600', color: '#333'}}>{crop.cycle}</span>
                                 </div>
                                  <div className="flex justify-between items-center text-sm">
                                     <span style={{color: '#999', display: 'flex', alignItems: 'center', gap: '6px'}}><TrendingUp size={16} /> Market Use</span>
                                     <span style={{fontWeight: '600', color: '#333'}}>{crop.marketUse}</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                ))}
            </div>

            {/* Quality Promise Section */}
            <div className="text-center" style={{background: '#f2f7f0', padding: '4rem 2rem', borderRadius: '24px'}}>
                 <h2 style={{marginBottom: '1rem'}}>Our Quality Promise</h2>
                 <p style={{maxWidth: '700px', margin: '0 auto 3rem auto', color: '#666'}}>We adhere to rigorous standards from seed selection to harvest, ensuring that every crop meets the highest benchmarks for safety and quality.</p>
                 <div className="grid grid-3">
                     <div className="card" style={{padding: '2.5rem', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.04)'}}>
                         <div className="card-icon" style={{margin: '0 auto 1.5rem auto'}}><Check /></div>
                         <h4>Sustainable Soil Health</h4>
                         <p className="text-sm">We utilize regenerative practices to maintain nutrient-rich soil, reducing the need for synthetic inputs.</p>
                     </div>
                     <div className="card" style={{padding: '2.5rem', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.04)'}}>
                         <div className="card-icon" style={{margin: '0 auto 1.5rem auto'}}><Check /></div>
                         <h4>Rigorous Selection</h4>
                         <p className="text-sm">Every harvest undergoes manual sorting and grading to ensure uniform size, ripeness, and quality.</p>
                     </div>
                     <div className="card" style={{padding: '2.5rem', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.04)'}}>
                         <div className="card-icon" style={{margin: '0 auto 1.5rem auto'}}><Check /></div>
                         <h4>Cold Chain Logistics</h4>
                         <p className="text-sm">We prioritize rapid transport and appropriate storage conditions to extend shelf life and freshness.</p>
                     </div>
                 </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeGrow;
