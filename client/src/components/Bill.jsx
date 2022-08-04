import React from "react";

const Bill = () => {
    return(
        <section>
            <div>
                <div className="w-10/12 m-auto mt-20">
                    <h2 className="text-3xl font-semibold leading-6">Billing</h2>
                    <div className="my-5">
                        <input type="text" name="search" id="" placeholder="Search Items..." />
                    </div>

                    <section className="datasdasfg">
                        <div className="databillforgd">
                            {/* contextdata */}
                            <div className="datainfohere d1">
                                <div>Name</div>
                                <div>
                                    Quantity
                                </div>
                                <div>
                                    Select
                                </div>
                                <div>
                                    Price:
                                </div>
                            </div>
                            {/* contextend */}

                            {/* itemstarthere */}
                            <div className="datainfohere d1">
                                <div>GoodDay</div>
                                <div>
                                    1
                                </div>
                                <div>
                                <select name="" id="" className="px-4 py-2">
                                        <option value="Per Box">Per Box</option>
                                        <option value="Per Packet">Per Packet</option>
                                        <option value="Per Dozen">Per Dozen</option>
                                    </select>
                                </div>
                                <div>
                                    9000
                                </div>
                            </div>
                            {/* itemendhere */}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Bill;