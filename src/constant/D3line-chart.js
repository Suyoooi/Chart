const width = 500;
const height = 500;
const margin = { top: 40, right: 40, bottom: 40, left: 40 };
const data = [
  { date: new Date("2018-01-01"), value: 10 },
  { date: new Date("2018-01-02"), value: 20 },
  { date: new Date("2018-01-03"), value: 30 },
  { date: new Date("2018-01-04"), value: 25 },
  { date: new Date("2018-01-05"), value: 35 },
  { date: new Date("2018-01-06"), value: 45 },
  { date: new Date("2018-01-07"), value: 60 },
  { date: new Date("2018-01-08"), value: 50 },
];

// x 축으로 사용될 값을 설정합니다.
const x = d3
  .scaleTime()
  // .scaleTime()는 x축시 시간을 기준으로 설정할 것이라고 설정? 선언? 합니다.
  // 내부 소스를 보지 않아서 확실하진 않지만 X축으로 사용할 값을 직접 원시 값을 넣어주지 않아도 위 메서드를 통해서 알아서 해주는 것 같습니다.
  // 예를 들면 data = [{ date : '2018-01-01', ...} 이렇게 직접 원시 데이터를 넣어주지 않고 new Date('2018-01-08')를 넣으면 알아서 날짜 형식으로 해주는 듯 합니다.
  .domain(d3.extent(data, (d) => d.date))
  // .extent()는 위 코드로 이야기를 하면 첫번째 인자값의 데이타의 date 속성의 값중에 가장 작은값과 가장 큰값을 배열로 응답해줍니다.
  // ex: [new Date('2018-01-01'), new Date('2018-01-08')]
  .range([margin.left, width - margin.right]);
// .range()는 위치값으로 최소값의 위치와 최대값의 위치를 배열로 받아 위 .domain의 값과 매칭하는 듯 합니다.

const y = d3
  .scaleLinear()
  // .scaleLinear()는 위 .scaleTime() 과 비슷한 역할을 하지만 얜 선의 범위로 설정? 선언? 해준 것 입니다.
  .domain([0, d3.max(data, (d) => d.value)])
  .nice()
  // 선형태의 값으로 최소값은 0 이고 .max()는 .extent()과 비슷하게 동작해서 가장 큰 값을 응답해줍니다.
  // .nice()는 시작값과 끝 값을 반올림 값으로 해줍니다.
  // ex: [0.2123123123, 0.991234123123] > [0.2, 1]
  .range([height - margin.bottom, margin.top]);

// 여기에서 인자 변수의 명칭으로 g를 사용하는게 SVG의 g 엘리먼트를 표현한 것으로 보입니다.
// SVG에서 g 엘리먼트는 그룹을 의미합니다.
const xAxis = (g) =>
  g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    // X축의 위치를 정합니다. translate(x, y)
    .call(
      d3
        .axisBottom(x)
        .ticks(width / 90)
        .tickSizeOuter(0)
    );
// .axisBottom()는 중심선을 기준으로 아래쪽에 ticks를 위치시킵니다.
// .axisLeft()는 중심선 기준 왼쪽에 위치
// .ticks()는 역시 소스코드를 보진 않았지만 값이 작아질수록 ticks의 갯수가 줄어듭니다.
// .tickSizeOuter()는 tick의 바깥 선? 의 크기를 조절합니다.

//.call(funcName[, arg[, arg2[, ...]]])
// 첫번재 파라미터로 설정한 이름의 함수를 실행하고, 선택적으로 두번째 이후로 그 밖의 파라미터도 함께 넘길 수 있습니다.
// 첫번째 파라미터로 설정한 이름의 함수에서는 첫번째 인자값으로 .call 메서드를 실행한 객체를 this로 가리키며
// 선택적으로 두번째 인자값 이후로, 두번째 파라미터 값들을 받을 수 있습니다.

const yAxis = (g) =>
  g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove())
    // .select()는 document.querySelector()와 비슷하게 해당 선택자를 선택할 수 있습니다. 하나만 선택됩니다.
    // 복수 선택을 위해서는 .selectAll()을 사용할 수 있습니다. 이는 document.querySelectorAll()와 비슷합니다.
    // 여기에서 g(svg g element)중 'class="domain"' 요소를 삭제하였습니다.
    // 예제를 확인해보면 Y축의 중심선이 사라진걸 확인할 수 있습니다.
    .call((g) => {
      console.log(g.select(".tick:last-of-type text").attr("x"));
      return (
        g
          .select(".tick:last-of-type text")
          .clone()
          // 대충 이름만 보아도 알 수 있듯이 'tick' 이라는 클레스 중 마지막에 위치한 엘리먼트의 자식 text 엘리먼트를 복제하였습니다.
          .attr("x", 3)
          // .attr() 자바스크립트의 .setAttribute()와 비슷하게 엘리먼트의 속성과 값을 셋합니다.
          // 두번째 파라미터 값이 없다면 .getAttribute()와 비슷하데 엘리먼트의 해당 속성의 값을 불러옵니다.
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .attr("font-size", "20px")
          .text("Y축")
      );
      // .text() 위에서 복제한 엘리먼트에 text 값을 줍니다. .innerText()와 비슷합니다.
    });

const line = d3
  .line()
  // .line() 데이터의 값을 선으로 선으로 표현합니다.
  .defined((d) => !isNaN(d.value))
  // defined() value의 값이 Number가 아니라면 그래프의 선이 끊겨서 출력됩니다.
  .x((d) => x(d.date))
  .y((d) => y(d.value));
// 여기서 사용되는 인자명을 d로 사용하는 건 아마도 SVG의 path 엘리먼트의 속성 d를 의미하는 것 같습니다.
// d 속성은 패스의 모양을 정의합니다.
// * 2018-10-30 수정
// 다른 그래프들의 예제를 보니 d속성의 값이 아니여도 인자명으로 d를 사용 하는 것으로 보아
// 그냥 data를 줄여 사용하는 것 같습니다.

const svg = d3
  .select("body")
  .append("svg")
  .style("width", width)
  .style("height", height);
svg
  .append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("d", line);
svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();
