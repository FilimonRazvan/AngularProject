using ApiLearn;
using Microsoft.AspNetCore.Mvc;

namespace LearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static List<WeatherForecast> _forecasts = new List<WeatherForecast>()
        {
            new WeatherForecast()
            {
                Id =1,
                Date  = new DateTime(2023,04,01),
                Summary = "Test",
                TemperatureC = 32,
                

            }
        };

        public List<WeatherForecast> Forecasts { get => _forecasts; set => _forecasts = value; }

        private readonly ILogger<WeatherForecastController> _logger;


        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Forecasts;
        }

        [HttpDelete(template: "{id}")]
        public ActionResult Delete(int id)
        {
            var existingForecast = Forecasts.FirstOrDefault(x => x.Id == id);

            if (existingForecast != null)
            {
                Forecasts.Remove(existingForecast);
                return Ok();
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult Add(WeatherForecast postObject)
        {
            Forecasts.Add(postObject);
            return Ok();
        }
        [HttpPut(template: "{id}")]
        public ActionResult Update(WeatherForecast putObject)
        {
            var existingForecast = Forecasts.FirstOrDefault(x => x.Id == putObject.Id);
            if (existingForecast != null)
            {
                Forecasts.Remove(existingForecast);
                existingForecast.TemperatureC = putObject.TemperatureC;
                existingForecast.Date = putObject.Date;
                existingForecast.Summary = putObject.Summary;
           
                Forecasts.Add(existingForecast);
                return Ok();
            }
            return NotFound();
        }
    }
}