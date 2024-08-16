import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="flex items-center justify-center text-lg">
            <div className="bg-blue-950/40 p-8 rounded-2xl">
                <h1 className="text-4xl font-bold text-red-700 text-center mb-4 tracking-widest">The Krusty Krab</h1>

                <div className="text-white grid grid-cols-4 gap-x-[100px] gap-y-4">
                    {/* Krabby Patty Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-2 underline">Krabby Patty</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Krabby Patty</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>w/ Sea Cheese</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.50</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Double Krabby Patty</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$2.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>w/ Sea Cheese</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$2.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Triple Krabby Patty</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$3.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>w/ Sea Cheese</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$3.25</span>
                            </li>
                        </ul>
                    </div>

                    {/* Meals & Deals Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-2 underline">Meals & Deals</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Krabby Meal</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Double Krabby Meal</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.50</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Triple Krabby Meal</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$2.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sailors Surprise</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$2.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Salty Sea Dog</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$3.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Footlong</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$3.25</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sea Sides Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-2 underline">Sea - Sides</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Coral Bits</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Small</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Medium</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Large</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.50</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Kelp Rings w/ Salty Sauce</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.50</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Krabby Fries</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.95</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Seaweed Salad</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$1.50</span>
                            </li>
                        </ul>
                    </div>

                    {/* Drinks Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-2 underline">Drinks</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Kelp Shake</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>$2.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Seafoam Soda</span>
                                <span className="flex-grow border-b-4 border-dotted border-white border-"></span>
                                <span>Small $1.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span></span>
                                <span>Medium $1.25</span>
                            </li>
                            <li className="flex justify-between">
                                <span></span>
                                <span>Large $1.50</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
