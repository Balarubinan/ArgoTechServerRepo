import React from 'react'
import { useState } from 'react'

function TimeEstimateComp() {
    let [cost,setCost]=useState(0)
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(Object.entries(new FormData(event.target)))
        let formData=new FormData(event.target)
        let data={}
        for(let entry of formData.entries())
        data[entry[0]]=entry[1]
        console.log(data)
        let BaseCost=0;
        //  1 acre = 43560 Ft
        let side=Math.sqrt(parseInt(data.landArea)*43560)
        // area covered in one straight run
        let oneStrip=side*parseInt(data.scrapperLength)
        let TotalStrips=(side*side)/oneStrip
        //  1 foot => 0.0003048 Km
        let timePerStrip=(side*0.0003048)/parseInt(data.tractorSpeed)
        console.log([oneStrip,TotalStrips,side,timePerStrip])
        BaseCost=(timePerStrip*TotalStrips)
        console.log(BaseCost)
        let XtraFactor=0
        XtraFactor+=(parseInt(data.soilType)*0.2)
        XtraFactor+=(parseInt(data.soilCondition)*0.4)
        XtraFactor+=(parseInt(data.preCondition)*0.5)
        setCost((BaseCost*XtraFactor).toFixed(1).toString()+" Hours")
    }
    return (
        <div className="container px-5 my-5">
  <>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <form onSubmit={e=>submitHandler(e)}>
    <div className="form-group row">
      <label htmlFor="landArea" className="col-4 col-form-label">
        Land Area
      </label>
      <div className="col-8">
        <input
          id="landArea"
          name="landArea"
          placeholder="Area in acres"
          type="text"
          required="required"
          className="form-control"
        />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="tractorSpeed" className="col-4 col-form-label">
        Tractor Speed
      </label>
      <div className="col-8">
        <input
          id="tractorSpeed"
          name="tractorSpeed"
          placeholder="Speed in Kmph"
          type="text"
          required="required"
          className="form-control"
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-4">Scrapper Length</label>
      <div className="col-8">
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="scrapperLength"
            id="scrapperLength_0"
            type="radio"
            className="custom-control-input"
            defaultValue={6}
          />
          <label htmlFor="scrapperLength_0" className="custom-control-label">
            6Ft
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="scrapperLength"
            id="scrapperLength_1"
            type="radio"
            className="custom-control-input"
            defaultValue={8}
          />
          <label htmlFor="scrapperLength_1" className="custom-control-label">
            8Ft
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="scrapperLength"
            id="scrapperLength_2"
            type="radio"
            className="custom-control-input"
            defaultValue={10}
          />
          <label htmlFor="scrapperLength_2" className="custom-control-label">
            10ft
          </label>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <label className="col-4">Soil Condition</label>
      <div className="col-8">
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="soilCondition"
            id="soilCondition_0"
            type="radio"
            className="custom-control-input"
            defaultValue={1}
          />
          <label htmlFor="soilCondition_0" className="custom-control-label">
            Wet
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="soilCondition"
            id="soilCondition_1"
            type="radio"
            className="custom-control-input"
            defaultValue={2}
          />
          <label htmlFor="soilCondition_1" className="custom-control-label">
            Dry
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="soilCondition"
            id="soilCondition_2"
            type="radio"
            className="custom-control-input"
            defaultValue={3}
          />
          <label htmlFor="soilCondition_2" className="custom-control-label">
            Humid
          </label>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="soilType" className="col-4 col-form-label">
        Soil Type
      </label>
      <div className="col-8">
        <select id="soilType" name="soilType" className="custom-select">
          <option value={1}>Sand</option>
          <option value={2}>Clay</option>
          <option value={3}>Silt</option>
          <option value={4}>Loam</option>
          <option value={5}>Peat</option>
          <option value={6}>Chalky</option>
        </select>
      </div>
    </div>
    <div className="form-group row">
      <label className="col-4">Pre-land Level Condition</label>
      <div className="col-8">
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="preCondition"
            id="preCondition_0"
            type="radio"
            className="custom-control-input"
            defaultValue={1}
          />
          <label htmlFor="preCondition_0" className="custom-control-label">
            Moderate
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="preCondition"
            id="preCondition_1"
            type="radio"
            className="custom-control-input"
            defaultValue={2}
          />
          <label htmlFor="preCondition_1" className="custom-control-label">
            Bad
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            name="preCondition"
            id="preCondition_2"
            type="radio"
            className="custom-control-input"
            defaultValue={3}
          />
          <label htmlFor="preCondition_2" className="custom-control-label">
            Worst
          </label>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="offset-4 col-8">
        <button name="submit" type="submit" className="btn btn-primary">
          Estimate Time
        </button>
      </div>
    </div>
  </form>
  <h2 style={{"align":"center"}}>Estimated Time: {cost}</h2>
</>

</div>

    )
}

export default TimeEstimateComp
