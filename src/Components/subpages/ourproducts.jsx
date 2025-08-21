import React, { useState } from 'react';
import Hot_product from './hot_product';
import On_sale from './on_sale';
import New_arrival from './new_arrival';
import Trending_now from './trending_now';

const Ourproducts = () => {
    const [activeTab, setActiveTab] = useState('HOT'); 
    return (
        <>
            <div className='mt-4'>
                <p className='text-5xl text-center font-bold'>Our Products</p>
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700 flex justify-center items-center">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'HOT' ? 'border-purple-600 text-purple-600' : 'hover:text-gray-600 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('HOT')}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'HOT'}
                            >
                                HOT
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'ON SALE' ? 'border-purple-600 text-purple-600' : 'hover:text-gray-600 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('ON SALE')}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'ON SALE'}
                            >
                                ON SALE
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'NEW ARRIVAL' ? 'border-purple-600 text-purple-600' : 'hover:text-gray-600 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('NEW ARRIVAL')}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'NEW ARRIVAL'}
                            >
                                NEW ARRIVAL
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'TRENDING NOW' ? 'border-purple-600 text-purple-600' : 'hover:text-gray-600 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('TRENDING NOW')}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'TRENDING NOW'}
                            >
                                TRENDING NOW
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="default-styled-tab-content">
                    {activeTab === 'HOT' && (
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                            <Hot_product />
                        </div>
                    )}
                    {activeTab === 'ON SALE' && (
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                            <On_sale />
                        </div>
                    )}
                    {activeTab === 'NEW ARRIVAL' && (
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                            <New_arrival />
                        </div>
                    )}
                    {activeTab === 'TRENDING NOW' && (
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                            <Trending_now />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Ourproducts;
