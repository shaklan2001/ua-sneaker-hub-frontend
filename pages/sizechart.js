import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sizechart = () => {

  const data = [
    { size: "US - Men's", "3.5": "", "4": "", "4.5": "", "5": "", "5.5": "", "6": "", "6.5": "" },
    { size: "US- Women's", "5": "", "5.5": "", "6": "", "6.5": "", "7": "", "7.5": "", "8": "" },
    { size: "UK", "3": "", "3.5": "", "4": "", "4.5": "", "5": "", "5.5": "", "6": "" },
    { size: "CM/JP", "22.5": "", "23": "", "23.5": "", "23.5": "", "24": "", "24": "", "24.5": "" },
    { size: "EU", "35.5": "", "36": "", "36.5": "", "37.5": "", "38": "", "38.5": "", "39": "" },
    { size: "Foot Length (cm)", "21.6": "", "22": "", "22.4": "", "22.9": "", "23.3": "", "23.7": "", "24.1": "" },
  ];

  const columns = Object.keys(data[0]).map(key => ({
    Header: key,
    accessor: key
  }));

  return (
    <div className="text-center max-w-[1100px] mx-auto my-[50px] md:my-[80px]">
      <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
        Size Guide
      </div>
      <div className="text-left max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[27px] mb-2 font-semibold leading-tight">
          Footwear size chart
        </div>
        <div className="text-md md:text-[15px]  pb-4">
          Find your size in the chart below. If you do not know your size, use the "How to measure foot length" prompts at the bottom of the size guide to help you find the right size. Please note, the CM size displayed on shoe boxes and labels is different to foot length (cm).
        </div>


        <div className="text-left  mt-10 text-[30px] md:text-[30px] font-semibold leading-tight pb-6">
          Size Chart
        </div>
        <div>
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className=" border border-gray-200 p-2">US</th>
                <th className="border border-gray-200 p-2 bg-gray-100">UK</th>
                <th className="border border-gray-200 p-2">EU</th>
                <th className="border border-gray-200 p-2 bg-gray-100">CM</th>
                <th className="border border-gray-200 p-2">IN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">4</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">3</td>
                <td className="border border-gray-200 p-2">37</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">22.9</td>
                <td className="border border-gray-200 p-2">9</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">4.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">3.5</td>
                <td className="border border-gray-200 p-2">37-38</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">23.3</td>
                <td className="border border-gray-200 p-2">9 1/4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">4</td>
                <td className="border border-gray-200 p-2">38</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">23.8</td>
                <td className="border border-gray-200 p-2">9 3/8</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">5.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">4.5</td>
                <td className="border border-gray-200 p-2">38-39</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">24.1</td>
                <td className="border border-gray-200 p-2">9 1/2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">6</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">5</td>
                <td className="border border-gray-200 p-2">39</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">24.8</td>
                <td className="border border-gray-200 p-2">9 3/4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">6.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">5.5</td>
                <td className="border border-gray-200 p-2">39-40</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">25.1</td>
                <td className="border border-gray-200 p-2">9 7/8</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">7</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">6</td>
                <td className="border border-gray-200 p-2">40</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">25.4</td>
                <td className="border border-gray-200 p-2">10</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">7.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">6.5</td>
                <td className="border border-gray-200 p-2">41</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">25.8</td>
                <td className="border border-gray-200 p-2">10 1/8</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">8</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">7</td>
                <td className="border border-gray-200 p-2">41-21</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">26</td>
                <td className="border border-gray-200 p-2">10 1/4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">9</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">8</td>
                <td className="border border-gray-200 p-2">42</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">26.7</td>
                <td className="border border-gray-200 p-2">10 1/2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">9.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">8.5</td>
                <td className="border border-gray-200 p-2">43-44</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">27.7</td>
                <td className="border border-gray-200 p-2">10 7/8</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">10</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">9</td>
                <td className="border border-gray-200 p-2">44</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">27.9</td>
                <td className="border border-gray-200 p-2">11</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">10.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">9.5</td>
                <td className="border border-gray-200 p-2">44-45</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">28.6</td>
                <td className="border border-gray-200 p-2">11 1/4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">11</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">10</td>
                <td className="border border-gray-200 p-2">45</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">29.2</td>
                <td className="border border-gray-200 p-2">11 1/2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">11.5</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">10.5</td>
                <td className="border border-gray-200 p-2">45-46</td>
                <td className="border border-gray-200 p-2 p-2 bg-gray-100">29.5</td>
                <td className="border border-gray-200 p-2">11 5/8</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="text-[28px] md:text-[20px] pt-[70px] font-semibold leading-tight mb-6">
          How to measure foot length
        </div>
        <div className="text-md md:text-[15px] pb-4">
          Tape a piece of paper to a hard, flat surface, ensuring the paper doesn't slip.
        </div>
        <div className="text-md md:text-[15px] pb-4">
          Stand on the paper, feet shoulder width apart and weight evenly balanced (only one foot will be on the paper).
        </div>
        <div className="text-md md:text-[15px] pb-4">
          With a pen or pencil pointed straight down, have a friend or partner assist you by marking the tip of the big toe &and the outermost part of the heel.
        </div>
        <div className="text-md md:text-[15px] pb-4">
          Once the marks are recorded, step off the paper and use a ruler or tape measure to measure the distance between the two points. This measurement represents the length of the foot.
        </div>
        <div className="text-md md:text-[15px] pb-4">
          Repeat the process with the other foot. Please note that it is common for one foot to be a slightly different length to the other.
        </div>
        <div className="text-md md:text-[15px] pb-4">
          Apply the longer of the two measurements to our size chart to find the right correlating size for the recorded foot length. If the measurement is between sizes, we recommend sizing up
        </div>

        <div className='pt-[60px]'>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/5zvMD6Y4sNo?si=03yBY6y5UA3nEply" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>


    </div>
  )
}

export default sizechart