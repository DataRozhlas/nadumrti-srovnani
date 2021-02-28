const muni = {
  CZ0100: "Praha",
  CZ0201: "Benešov",
  CZ0202: "Beroun",
  CZ0203: "Kladno",
  CZ0204: "Kolín",
  CZ0205: "Kutná Hora",
  CZ0206: "Mělník",
  CZ0207: "Mladá Boleslav",
  CZ0208: "Nymburk",
  CZ0209: "Praha-východ",
  CZ020A: "Praha-západ",
  CZ020B: "Příbram",
  CZ020C: "Rakovník",
  CZ0311: "České Budějovice",
  CZ0312: "Český Krumlov",
  CZ0313: "Jindřichův Hradec",
  CZ0314: "Písek",
  CZ0315: "Prachatice",
  CZ0316: "Strakonice",
  CZ0317: "Tábor",
  CZ0321: "Domažlice",
  CZ0322: "Klatovy",
  CZ0323: "Plzeň-město",
  CZ0324: "Plzeň-jih",
  CZ0325: "Plzeň-sever",
  CZ0326: "Rokycany",
  CZ0327: "Tachov",
  CZ0411: "Cheb",
  CZ0412: "Karlovy Vary",
  CZ0413: "Sokolov",
  CZ0421: "Děčín",
  CZ0422: "Chomutov",
  CZ0423: "Litoměřice",
  CZ0424: "Louny",
  CZ0425: "Most",
  CZ0426: "Teplice",
  CZ0427: "Ústí nad Labem",
  CZ0511: "Česká Lípa",
  CZ0512: "Jablonec nad Nisou",
  CZ0513: "Liberec",
  CZ0514: "Semily",
  CZ0521: "Hradec Králové",
  CZ0522: "Jičín",
  CZ0523: "Náchod",
  CZ0524: "Rychnov nad Kněžnou",
  CZ0525: "Trutnov",
  CZ0531: "Chrudim",
  CZ0532: "Pardubice",
  CZ0533: "Svitavy",
  CZ0534: "Ústí nad Orlicí",
  CZ0631: "Havlíčkův Brod",
  CZ0632: "Jihlava",
  CZ0633: "Pelhřimov",
  CZ0634: "Třebíč",
  CZ0635: "Žďár nad Sázavou",
  CZ0641: "Blansko",
  CZ0642: "Brno-město",
  CZ0643: "Brno-venkov",
  CZ0644: "Břeclav",
  CZ0645: "Hodonín",
  CZ0646: "Vyškov",
  CZ0647: "Znojmo",
  CZ0711: "Jeseník",
  CZ0712: "Olomouc",
  CZ0713: "Prostějov",
  CZ0714: "Přerov",
  CZ0715: "Šumperk",
  CZ0721: "Kroměříž",
  CZ0722: "Uherské Hradiště",
  CZ0723: "Vsetín",
  CZ0724: "Zlín",
  CZ0801: "Bruntál",
  CZ0802: "Frýdek-Místek",
  CZ0803: "Karviná",
  CZ0804: "Nový Jičín",
  CZ0805: "Opava",
  CZ0806: "Ostrava-město",
};

const sex = {
  M: "muž",
  Z: "žena",
};

const pltLines = [];

fetch("https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/umrti.csv")
  .then((response) => response.text())
  .then((resp) => {
    const d = d3.csvParse(resp);
    const data = [];
    let ld = d.slice(-1)[0].datum;
    const yMin = Date.parse(d[0].datum);
    const yMax = Date.parse(ld);

    d.forEach((r, i) => {
      i % 1000 === 0 && i !== 0 ? console.log(r.datum) : null;
      i % 4000 === 0 && i !== 0
        ? pltLines.push({
            color: "#de2d26",
            value: Date.parse(r.datum),
            width: 1,
            label: {
              text: "4000",
              align: "right",
              style: {
                color: "#de2d26",
                fontWeight: "bold",
              },
            },
          })
        : null;
      data.push([
        Math.round(Math.random() * 1000) / 10,
        Date.parse(r.datum), // 86400000)  + (Math.random() * 100) / 10,
        r.datum,
        r.pohlavi,
        r.vek,
        r.okres_lau_kod,
      ]);
    });
    if (!Highcharts.Series.prototype.renderCanvas) {
      throw "Module not loaded";
    }

    Highcharts.chart("mrtvi-tecky", {
      chart: {
        height: "130%",
      },
      boost: {
        useGPUTranslations: true,
        usePreAllocated: true,
      },
      credits: {
        text: `data (k ${parseInt(ld.split("-")[2])}. ${parseInt(
          ld.split("-")[1]
        )}.): ÚZIS`,
        href: "https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19",
      },
      xAxis: {
        min: 0,
        max: 115,
        visible: false,
      },
      yAxis: {
        min: yMin,
        max: yMax,
        reversed: true,
        minPadding: 0,
        maxPadding: 0,
        endOnTick: true,
        showLastLabel: false,
        title: {
          text: null,
        },
        labels: {
          formatter() {
            const tStamp = new Date(this.value);
            return `${tStamp.getDate()}. ${tStamp.getMonth() + 1}. ${
              tStamp.getFullYear() - 2000
            }`;
          },
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        visible: true,
        plotLines: pltLines,
      },
      title: {
        text: `${data.length.toLocaleString("cs")} obětí covidu`,
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          type: "scatter",
          color: "#636363",
          fillOpacity: 1,
          data,
          marker: {
            radius: 1,
          },
          tooltip: {
            followPointer: false,
            headerFormat: "",
            pointFormatter() {
              const sel = data[this.index];
              const dte = `${parseInt(sel[2].split("-")[2])}. ${parseInt(
                sel[2].split("-")[1]
              )}. ${sel[2].split("-")[0]}`;
              return `${dte}<br>${sex[sel[3]]} ${sel[4]} let, okres ${
                muni[sel[5]]
              }`;
            },
          },
        },
      ],
    });
  });
