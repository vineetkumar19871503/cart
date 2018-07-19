export default {
  fusion: [{
      label: "Jan",
      tooltext: "iPhone(88%)",
      value: "88%"
    },
    {
      label: "Feb",
      tooltext: "Moto(78%)",
      value: "78%"
    },
    {
      label: "Mar",
      tooltext: "Xiaomi(75%)",
      value: "75%"
    },
    {
      label: "Apr",
      tooltext: "Vivo(68%)",
      value: "68%"
    },
    {
      label: "May",
      tooltext: "Nokia(61%)",
      value: "61%"
    }
  ],

  chartist: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    series: [
      [60, 65, 68, 80, 75, 62, 60, 55], //ios
      [75, 70, 72, 67, 63, 58, 66, 74] //android
    ],
    legendNames: ['IOS', 'Android']
  }
};
