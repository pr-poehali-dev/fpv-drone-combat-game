import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("menu");
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);

  const drones = [
    {
      id: 1,
      name: "REAPER MQ-9",
      type: "Тяжелый ударный",
      damage: 95,
      speed: 75,
      stealth: 40,
      armor: 85,
      price: 50000,
      image: "/img/f8820cff-9b8b-4412-81ad-b81bf76b8ed8.jpg",
    },
    {
      id: 2,
      name: "SWITCHBLADE 600",
      type: "Камикадзе",
      damage: 100,
      speed: 90,
      stealth: 95,
      armor: 20,
      price: 25000,
      image: "/img/f8820cff-9b8b-4412-81ad-b81bf76b8ed8.jpg",
    },
    {
      id: 3,
      name: "BAYRAKTAR TB2",
      type: "Разведывательный",
      damage: 70,
      speed: 65,
      stealth: 80,
      armor: 60,
      price: 35000,
      image: "/img/f8820cff-9b8b-4412-81ad-b81bf76b8ed8.jpg",
    },
  ];

  const missions = [
    {
      id: 1,
      name: 'ОПЕРАЦИЯ "БУРЯ"',
      difficulty: "Высокая",
      reward: 15000,
      objectives: [
        "Устранить командный пункт",
        "Уничтожить склад боеприпасов",
        "Эвакуироваться",
      ],
      weather: "Дождь",
      timeOfDay: "Ночь",
    },
    {
      id: 2,
      name: "РАЗВЕДКА БАЗЫ",
      difficulty: "Средняя",
      reward: 8000,
      objectives: [
        "Сфотографировать цели",
        "Избежать обнаружения",
        "Передать данные",
      ],
      weather: "Ясно",
      timeOfDay: "День",
    },
    {
      id: 3,
      name: "ESCORT КОНВОЯ",
      difficulty: "Низкая",
      reward: 5000,
      objectives: ["Сопроводить конвой", "Устранить угрозы", "Доставить груз"],
      weather: "Туман",
      timeOfDay: "Рассвет",
    },
  ];

  const weapons = [
    { name: "HELLFIRE AGM-114", damage: "+25", price: 8000 },
    { name: "MAVERICK AGM-65", damage: "+20", price: 6000 },
    { name: "БОМБА GBU-12", damage: "+30", price: 10000 },
    { name: "ПУЛЕМЕТ M134", damage: "+15", price: 4000 },
  ];

  const renderMenu = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-green-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-red-400"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-green-400 rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-6xl font-bold mb-4 tracking-wider"
            style={{ fontFamily: "Oswald" }}
          >
            FPV COMBAT DRONE
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            TACTICAL WARFARE SIMULATION
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono">SYSTEM ONLINE</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Menu Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card
            className="bg-gray-800/80 border-gray-600 hover:border-red-500 transition-all duration-300 cursor-pointer group"
            onClick={() => setActiveSection("missions")}
          >
            <CardHeader className="text-center pb-4">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 text-red-400 group-hover:text-red-300"
              />
              <CardTitle className="text-2xl font-bold text-white">
                МИССИИ
              </CardTitle>
              <CardDescription className="text-gray-300">
                Выберите боевое задание
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="bg-gray-800/80 border-gray-600 hover:border-green-500 transition-all duration-300 cursor-pointer group"
            onClick={() => setActiveSection("shop")}
          >
            <CardHeader className="text-center pb-4">
              <Icon
                name="ShoppingCart"
                size={48}
                className="mx-auto mb-4 text-green-400 group-hover:text-green-300"
              />
              <CardTitle className="text-2xl font-bold text-white">
                АРСЕНАЛ
              </CardTitle>
              <CardDescription className="text-gray-300">
                Улучшения и оружие
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800/80 border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <Icon
                name="Settings"
                size={48}
                className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300"
              />
              <CardTitle className="text-2xl font-bold text-white">
                НАСТРОЙКИ
              </CardTitle>
              <CardDescription className="text-gray-300">
                Конфигурация системы
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-800/60 p-4 rounded border border-gray-600">
            <div className="text-green-400 text-2xl font-bold">24</div>
            <div className="text-gray-300 text-sm">МИССИИ ЗАВЕРШЕНЫ</div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded border border-gray-600">
            <div className="text-red-400 text-2xl font-bold">156</div>
            <div className="text-gray-300 text-sm">ЦЕЛИ УНИЧТОЖЕНЫ</div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded border border-gray-600">
            <div className="text-blue-400 text-2xl font-bold">89%</div>
            <div className="text-gray-300 text-sm">ТОЧНОСТЬ</div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded border border-gray-600">
            <div className="text-yellow-400 text-2xl font-bold">ПОЛКОВНИК</div>
            <div className="text-gray-300 text-sm">ЗВАНИЕ</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMissions = () => (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="mb-8 flex items-center gap-4">
        <Button
          onClick={() => setActiveSection("menu")}
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          НАЗАД
        </Button>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "Oswald" }}>
          ВЫБОР МИССИИ
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {missions.map((mission) => (
          <Card
            key={mission.id}
            className="bg-gray-800 border-gray-600 hover:border-red-500 transition-all cursor-pointer"
            onClick={() => setSelectedMission(mission.id)}
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl text-white">
                  {mission.name}
                </CardTitle>
                <Badge
                  variant={
                    mission.difficulty === "Высокая"
                      ? "destructive"
                      : mission.difficulty === "Средняя"
                        ? "default"
                        : "secondary"
                  }
                >
                  {mission.difficulty}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Icon name="DollarSign" size={16} />
                <span>{mission.reward.toLocaleString()}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-300 mb-2">ЗАДАЧИ:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {mission.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-400"></div>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    Погода:{" "}
                    <span className="text-blue-400">{mission.weather}</span>
                  </span>
                  <span className="text-gray-300">
                    Время:{" "}
                    <span className="text-yellow-400">{mission.timeOfDay}</span>
                  </span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  НАЧАТЬ МИССИЮ
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="mb-8 flex items-center gap-4">
        <Button
          onClick={() => setActiveSection("menu")}
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          НАЗАД
        </Button>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "Oswald" }}>
          АРСЕНАЛ
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Drones Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-green-400">
            БОЕВЫЕ ДРОНЫ
          </h3>
          <div className="space-y-6">
            {drones.map((drone) => (
              <Card
                key={drone.id}
                className="bg-gray-800 border-gray-600 hover:border-green-500 transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">
                        {drone.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {drone.type}
                      </CardDescription>
                    </div>
                    <div className="text-green-400 font-bold">
                      ${drone.price.toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Урон</span>
                      <div className="flex items-center gap-2">
                        <Progress value={drone.damage} className="w-20 h-2" />
                        <span className="text-red-400">{drone.damage}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Скорость</span>
                      <div className="flex items-center gap-2">
                        <Progress value={drone.speed} className="w-20 h-2" />
                        <span className="text-blue-400">{drone.speed}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Скрытность</span>
                      <div className="flex items-center gap-2">
                        <Progress value={drone.stealth} className="w-20 h-2" />
                        <span className="text-purple-400">{drone.stealth}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Броня</span>
                      <div className="flex items-center gap-2">
                        <Progress value={drone.armor} className="w-20 h-2" />
                        <span className="text-green-400">{drone.armor}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                      КУПИТЬ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weapons Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-red-400">ВООРУЖЕНИЕ</h3>
          <div className="space-y-4">
            {weapons.map((weapon, idx) => (
              <Card
                key={idx}
                className="bg-gray-800 border-gray-600 hover:border-red-500 transition-all"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-bold">{weapon.name}</h4>
                      <p className="text-red-400">{weapon.damage} урона</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">
                        ${weapon.price.toLocaleString()}
                      </div>
                      <Button
                        size="sm"
                        className="mt-2 bg-red-600 hover:bg-red-700"
                      >
                        КУПИТЬ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {activeSection === "menu" && renderMenu()}
      {activeSection === "missions" && renderMissions()}
      {activeSection === "shop" && renderShop()}
    </>
  );
};

export default Index;
