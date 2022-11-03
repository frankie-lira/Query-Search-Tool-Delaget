import "./styles.css";

import {
  Icon,
  Button,
  Menu,
  Pagination,
  Container,
  Dropdown,
  Form,
  Label,
  Segment,
  Table,
  Input,
} from "semantic-ui-react";

import React, { useEffect, useState } from "react";

import { ReactDatez } from "react-datez";
import moment from "moment";
import ScriptTag from "react-script-tag";
import { Component } from "react/cjs/react.production.min";
import Restaurants from "../../Data/Restaurants.json";
import Transactions from "../../Data/Transactions.json";
import transactionData from "../../Data/Transactions.js";
import { timeOptions, options, dropDownoptions } from "../../options.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {Index2} from './component/InputsTypes/index2';
import $ from "jquery";

//https://codepen.io/nscherneck/pen/dJoVdZ
//https://codepen.io/hellboy71/pen/RedBBE

export function SideBar() {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [fromDate, setFromDate] = useState("2021-04-01");
  const [toDate, setToDate] = useState("2021-04-01");
  const [fromHour, setFromHour] = useState("");
  const [toHour, setToHour] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");

  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState({ data: [] });

  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [transData, setTransData] = useState([]);
  const [metricDefinitions, setMetricDefinitions] = useState([]);
  const [metricCode, setMetricCode] = useState("");

  const [metricCriteria, setMetricCriteria] = useState([
    {
      metricCode: "string",
      compareType: "string",
      value: 0,
    },
  ]);

  

  {/* -----------------------------------POST CALL to API----------------------------------- */}
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://customsearchquerytoolapi.azurewebsites.net/Search/Query",
        {
          method: "POST",
          body: JSON.stringify({
            restaurantIds: restaurantIds,
            fromDate: fromDate,
            toDate: toDate,
            fromHour: fromHour,
            toHour: toHour,
            metricCriteria: metricCriteria,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("Value of from Hour: ", fromHour);
      console.log("Value of from Hour: ", toHour);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setTransData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("result of trans data: ", transData);

  {/* -----------------------------------GET Call to get Metric Defentions from API----------------------------------- */}

  useEffect(() => {
    getData(
      "https://customsearchquerytoolapi.azurewebsites.net/Search/MetricDefinitions"
    ).then((data) => {
      setMetricDefinitions(data);
    });
  }, []);

  console.log(metricDefinitions);

  {/* -----------------------------------Mapping Restaurants----------------------------------- */}

  const options = Restaurants.map((r) => {
    return {
      key: r.Id,
      value: r.Id,
      text: r.Name,
    };
  });

  {/* -----------------------------------Mapping Metric Definitions and Logic of Adding More Metric Input Values----------------------------------- */}

  const metricCodeOptions = metricDefinitions.map((metrics) => {
    return {
      key: metrics.metricCode,
      value: metrics.metricCode,
      text: metrics.alias,
    };
  });

  const addMetrics = () => {
    const arrayOfMetrics = [...metricCriteria];

    arrayOfMetrics.push({
      metricCode: "string",
      compareType: "string",
      value: 0,
    });
    setMetricCriteria(arrayOfMetrics);
  };

  const deleteMatrics = (index) => {
    const listOfMetrics = [...metricCriteria];
    listOfMetrics.splice(index, 1);
    setMetricCriteria(listOfMetrics);
  };

  const handleMetricChange = (prop, index, value) => {
    const arrayOfMetrics = [...metricCriteria];
    arrayOfMetrics[index][prop] = value;
    setMetricCriteria(arrayOfMetrics);
  };

{/* -----------------------------------Pagination Logic Functions----------------------------------- */}
  const noOfRows = 20;
  const totalNumberOfPages = Math.ceil(transData.length / 20);
  let transactionDataPaginated = [];
  const handlePaginationChange = (pageNumber) => {
    setActivePage(pageNumber);
    console.log(pageNumber);
  };

  if (activePage < totalNumberOfPages && activePage > 0) {
    transactionDataPaginated = transData.slice(
      activePage * noOfRows - noOfRows,
      activePage * noOfRows
    );
    console.log(
      "This is the result of transaction data paginated with IF STATEMENT",
      transactionDataPaginated
    );
  }
  else if (activePage === totalNumberOfPages) {
    transactionDataPaginated = transData.slice(
      activePage * noOfRows - noOfRows
    );
    console.log(
      "This is the result of transaction data paginated with ELSE IF STATEMENT",
      transactionDataPaginated
    );
  }

  // const handleOnChange = (e) => {
  //   e.preventDefault()
  //   setSearchCity(e.target.value)
  // }
{/* -----------------------------------Console Log to check Status----------------------------------- */}
  console.log(restaurantIds);
  console.log(metricCode);
  console.log(fromDate);
  console.log(toDate);
  console.log(fromHour);
  console.log(toHour);
  console.log(operator);
  console.log(metricCode);
  console.log(data);
  console.log("The Value of Value: ", value);
{/* -----------------------------------Input Values----------------------------------- */}
  return (
    <Container>
      <Segment>
        <Form onSubmit={() => handleClick()}>
          <Form.Field>
            <label>Restaurant ID's</label>
            <Dropdown
              placeholder="Restaurant Ids"
              fluid
              multiple
              selection
              options={options}
              value={restaurantIds}
              onChange={(event, data) => {
                setRestaurantIds(data.value);
              }}
            />
          </Form.Field>

          <Form.Group>
            <Form.Field>
              <label>From Date</label>
              <ReactDatez
                name="dateInput"
                handleChange={(value) =>
                  setFromDate(moment(value).format("YYYY-MM-DD"))
                }
                value={fromDate}
                allowPast={true}
                dateFormat={"MM/DD/YYYY"}
                placeholder={"MM/DD/YYYY"}
                startDate={"10-01-2021"}
                endDate={"10-31-2021"}
                // onChange={(event, data) => {
                //   setFromDate(data.value);
                // }}

                // startDate={"2021-10-01"}
                // endDate={"2021-10-26"}
              />
            </Form.Field>
            <Form.Field>
              <label>To Date</label>
              <ReactDatez
                name="dateInput"
                handleChange={(value) =>
                  setToDate(moment(value).format("YYYY-MM-DD"))
                }
                value={toDate}
                allowPast={true}
                dateFormat={"MM/DD/YYYY"}
                placeholder={"MM/DD/YYYY"}
                startDate={fromDate}
                endDate={"10-31-2021"}
                // onChange={(event, data) => {
                //   setToDate(data.value);
                // }}
                // startDate={"2021-10-01"}
                // endDate={"2021-10-26"}
              />
            </Form.Field>

            <Form.Field>
              <label>From Hour</label>
              <Dropdown
                // centered
                // // placeholder='From Hour'
                // style={{ width: "75px", height: "30px" }}
                // fluid
                // selection
                // scrolling
                // value={fromHour}
                // options={timeOptions}
                // onChange={(event, data) => {
                //   setFromHour(data.value);
                // }}

                fluid
                // style={{ width: "75px", height: "30px" }}
                selection
                options={timeOptions}
                value={fromHour}
                onChange={(event, data) => {
                  setFromHour(data.value);
                }}
              />
            </Form.Field>

            <Form.Field>
              <label>To Hour </label>
              <Dropdown
                // placeholder='To Hour'
                // style={{ width: "75px", height: "30px" }}
                // fluid
                // selection
                // scrolling
                // options={timeOptions}
                // value={toHour}
                // onChange={(event, data) => {
                //   setToHour(data.value);
                // }}

                fluid
                // style={{ width: "75px", height: "30px" }}
                selection
                options={timeOptions}
                value={toHour}
                onChange={(event, data) => {
                  setToHour(data.value);
                }}
              />
            </Form.Field>
          </Form.Group>
{/* -----------------------------------Matric Criteria----------------------------------- */}
          {metricCriteria.map((data, index) => {
            return (
              <Form.Group>
                <Form.Field>
                  <label>Metric criteria</label>
                  <Dropdown
                    fluid
                    selection
                    options={metricCodeOptions}
                    value={data.metricCode}
                    onChange={(event, data) => {
                      handleMetricChange("metricCode", index, data.value);
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>CompareOperators</label>

                  <Dropdown
                    compact
                    fluid
                    selection
                    options={dropDownoptions}
                    value={data.compareType}
                    onChange={(event, data) => {
                      handleMetricChange("compareType", index, data.value);
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Value</label>
                  {/** Input component to store user entered value for selected metric */}
                  <Input
                    type="number"
                    value={data.value}
                    placeholder={"value"}
                    onChange={(event, data) => {
                      handleMetricChange(
                        "value",
                        index,
                        Number.parseInt(data.value)
                      );
                    }}
                  />
                </Form.Field>
                {metricCriteria.length <= 1 ? (
                  <p></p>
                ) : (
                  <Form.Field>
                    <label>Delete</label>
                    <Button
                      icon
                      basic
                      color="red"
                      compact
                      onClick={() => {
                        deleteMatrics(index);
                      }}
                    >
                      <Icon name="delete" />
                    </Button>
                  </Form.Field>
                )}
              </Form.Group>
            );
          })}

          {metricCriteria.length >= metricCodeOptions.length ? (
            <p></p>
          ) : (
            <Form.Field>
              <label>Add Criteria</label>
              <Button
                icon
                color="blue"
                // id="neonShadow"
                onClick={() => {
                  addMetrics();
                }}
              >
                <Icon name=" add circle" />
              </Button>
            </Form.Field>
          )}
          <Button color="green" type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
{/* -----------------------------------Table Headers----------------------------------- */}
      <Segment textAlign="center" floated="left" size="mini">
        <Table celled compact size="small" textAlign="left" fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Restuarant Name </Table.HeaderCell>
              <Table.HeaderCell>Restaurant ID </Table.HeaderCell>

              <Table.HeaderCell>Business Date</Table.HeaderCell>

              <Table.HeaderCell>Order number</Table.HeaderCell>

              <Table.HeaderCell>Order time</Table.HeaderCell>

              {metricDefinitions.map((md) => {
                return <Table.HeaderCell>{md.alias}</Table.HeaderCell>;
              })}
            </Table.Row>
{/* -----------------------------------Table Body----------------------------------- */}
          </Table.Header>
          {transData.length === 0 ? (
            <p>There are no results!</p>
          ) : (
            <React.Fragment>
              <Table.Body>
                {transactionDataPaginated.map((d) => {
                  return (
                    <Table.Row key={d.restaurantId}>
                      <Table.Cell>
                        {Restaurants.map((rest) => {
                          if (rest.Id === d.restaurantId) {
                            switch (rest.Id) {
                              case 1:
                                return "Greystone";
                              case 2:
                                return "Whitemarsh";
                              case 3:
                                return "Edgewood";
                              case 4:
                                return "Cedar";
                              case 5:
                                return "Canterbury";
                              case 6:
                                return "Jennings";
                              case 7:
                                return "Dogwood";
                              case 8:
                                return "Hamilton";
                              case 9:
                                return "Pleasant";
                              case 10:
                                return "James";
                            }
                          }
                        })}
                      </Table.Cell>
                      <Table.Cell>{d.restaurantId}</Table.Cell>
                      <Table.Cell>{d.busDt}</Table.Cell>
                      <Table.Cell>{d.orderNumber}</Table.Cell>
                      <Table.Cell>{d.orderTime}</Table.Cell>
                      {metricDefinitions.map((m) => {
                        const metricCodeName =
                          m.metricCode.charAt(0).toLowerCase() +
                          m.metricCode.slice(1);
                        console.log(metricCodeName);
                        return (
                          <Table.Cell>
                            {formatData(d[metricCodeName], m)}
                          </Table.Cell>
                        );
                      })}
                    </Table.Row>
                  );
                })}
              </Table.Body>
{/* -----------------------------------Footer and Pagination----------------------------------- */}
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="7">
                    <Pagination
                      activePage={activePage}
                      onPageChange={(event, data) =>
                        handlePaginationChange(data.activePage)
                      }
                      totalPages={Math.ceil(totalNumberOfPages)}
                    ></Pagination>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </React.Fragment>
          )}
        </Table>
      </Segment>
{/* -----------------------------------To Check Status of API information----------------------------------- */}
      <div>
        {err && <h2>{err}</h2>}

        {isLoading && <h2>Loading...</h2>}

        {transData && (
          <div>
            <h2>{transData.restaurantId}</h2>
            <h2>{transData.totalAmount}</h2>
          </div>
        )}
      </div>

      {/* <button id="neonShadow"><span>Click me</span></button> */}

    </Container>
  );
}
{/* -----------------------------------Functions----------------------------------- */}
async function getData(
  url = "https://customsearchquerytoolapi.azurewebsites.net/Search/MetricDefinitions"
) {
  const response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });

  return response.json();
}

function formatData(value, metricDefinition) {
  let formatedData = "";
  switch (metricDefinition.dataType) {
    case "Money":
      formatedData = `$${value.toFixed(metricDefinition.decimalPlaces)}`;
      break;
    case "Percent":
      formatedData = `${(value * 100).toFixed(
        metricDefinition.decimalPlaces
      )}%`;
      break;
    case "Number":
      formatedData = value.toFixed(metricDefinition.decimalPlaces);
      break;

    default:
      break;
  }

  return formatedData;
}
