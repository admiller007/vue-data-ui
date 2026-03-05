<script setup>
import { ref, computed } from "vue";
import LocalVueUiGalaxy from '../src/components/vue-ui-galaxy.vue';
import LocalVueUiRings from '../src/components/vue-ui-rings.vue';
import LocalVueUiRadar from '../src/components/vue-ui-radar.vue';
import LocalVueUiDonut from '../src/components/vue-ui-donut.vue';
import LocalVueUiThermometer from '../src/components/vue-ui-thermometer.vue';

const planets = [
    {
        name: 'Mercury',
        symbol: '☿',
        color: '#a8a8a8',
        gravity: 3.7,
        moons: 0,
        diameter: 4879,
        distanceAU: 0.39,
        orbitalPeriodYears: 0.24,
        orbitalSpeedKms: 47.87,
        avgTempC: 167,
        minTempC: -180,
        maxTempC: 430,
        atmosphere: [
            { name: 'O₂', values: [42], color: '#7ab3e0' },
            { name: 'Na', values: [29], color: '#e8c87a' },
            { name: 'H₂', values: [22], color: '#f0f0f0' },
            { name: 'He', values: [6], color: '#b8e8c8' },
            { name: 'Other', values: [1], color: '#d0a0d0' },
        ],
        description: 'The smallest planet, closest to the Sun. Extreme temperature swings due to no atmosphere.',
    },
    {
        name: 'Venus',
        symbol: '♀',
        color: '#e8d08a',
        gravity: 8.87,
        moons: 0,
        diameter: 12104,
        distanceAU: 0.72,
        orbitalPeriodYears: 0.62,
        orbitalSpeedKms: 35.02,
        avgTempC: 464,
        minTempC: 455,
        maxTempC: 480,
        atmosphere: [
            { name: 'CO₂', values: [96.5], color: '#d0784a' },
            { name: 'N₂', values: [3.5], color: '#7ab3e0' },
        ],
        description: 'The hottest planet due to a runaway greenhouse effect. Spins backwards!',
    },
    {
        name: 'Earth',
        symbol: '♁',
        color: '#4fa3e8',
        gravity: 9.81,
        moons: 1,
        diameter: 12742,
        distanceAU: 1.0,
        orbitalPeriodYears: 1.0,
        orbitalSpeedKms: 29.78,
        avgTempC: 15,
        minTempC: -89,
        maxTempC: 57,
        atmosphere: [
            { name: 'N₂', values: [78], color: '#7ab3e0' },
            { name: 'O₂', values: [21], color: '#b8e8c8' },
            { name: 'Ar', values: [1], color: '#d0a0d0' },
        ],
        description: 'Our home world. The only known planet with life and liquid water on its surface.',
    },
    {
        name: 'Mars',
        symbol: '♂',
        color: '#c1440e',
        gravity: 3.72,
        moons: 2,
        diameter: 6779,
        distanceAU: 1.52,
        orbitalPeriodYears: 1.88,
        orbitalSpeedKms: 24.07,
        avgTempC: -65,
        minTempC: -143,
        maxTempC: 35,
        atmosphere: [
            { name: 'CO₂', values: [95.3], color: '#d0784a' },
            { name: 'N₂', values: [2.7], color: '#7ab3e0' },
            { name: 'Ar', values: [1.6], color: '#d0a0d0' },
            { name: 'Other', values: [0.4], color: '#e8c87a' },
        ],
        description: 'The Red Planet. Home to Olympus Mons, the tallest volcano in the solar system.',
    },
    {
        name: 'Jupiter',
        symbol: '♃',
        color: '#c88b3a',
        gravity: 24.79,
        moons: 95,
        diameter: 139820,
        distanceAU: 5.2,
        orbitalPeriodYears: 11.86,
        orbitalSpeedKms: 13.07,
        avgTempC: -110,
        minTempC: -145,
        maxTempC: -108,
        atmosphere: [
            { name: 'H₂', values: [89], color: '#f0f0f0' },
            { name: 'He', values: [10], color: '#b8e8c8' },
            { name: 'Other', values: [1], color: '#e8c87a' },
        ],
        description: 'The giant of the solar system. Its Great Red Spot is a storm older than 350 years.',
    },
    {
        name: 'Saturn',
        symbol: '♄',
        color: '#e3cfa0',
        gravity: 10.44,
        moons: 145,
        diameter: 116460,
        distanceAU: 9.58,
        orbitalPeriodYears: 29.46,
        orbitalSpeedKms: 9.68,
        avgTempC: -140,
        minTempC: -191,
        maxTempC: -130,
        atmosphere: [
            { name: 'H₂', values: [96.3], color: '#f0f0f0' },
            { name: 'He', values: [3.7], color: '#b8e8c8' },
        ],
        description: 'The ringed beauty. Saturn is less dense than water — it would float in a giant bathtub!',
    },
    {
        name: 'Uranus',
        symbol: '⛢',
        color: '#b2e0e8',
        gravity: 8.87,
        moons: 27,
        diameter: 50724,
        distanceAU: 19.22,
        orbitalPeriodYears: 84.01,
        orbitalSpeedKms: 6.81,
        avgTempC: -195,
        minTempC: -224,
        maxTempC: -197,
        atmosphere: [
            { name: 'H₂', values: [83], color: '#f0f0f0' },
            { name: 'He', values: [15], color: '#b8e8c8' },
            { name: 'CH₄', values: [2.3], color: '#7ab3e0' },
        ],
        description: 'The sideways planet — its axis tilts 98°, so it rolls around the Sun like a ball.',
    },
    {
        name: 'Neptune',
        symbol: '♆',
        color: '#5b5ddf',
        gravity: 11.15,
        moons: 16,
        diameter: 49244,
        distanceAU: 30.05,
        orbitalPeriodYears: 164.8,
        orbitalSpeedKms: 5.43,
        avgTempC: -200,
        minTempC: -220,
        maxTempC: -200,
        atmosphere: [
            { name: 'H₂', values: [80], color: '#f0f0f0' },
            { name: 'He', values: [19], color: '#b8e8c8' },
            { name: 'CH₄', values: [1.5], color: '#7ab3e0' },
        ],
        description: 'The windiest planet, with gusts reaching 2100 km/h. Takes 165 years to orbit the Sun.',
    },
];

const selectedPlanetName = ref('Earth');

const selectedPlanet = computed(() => planets.find(p => p.name === selectedPlanetName.value));

// --- Galaxy: planet sizes by diameter ---
const galaxyDataset = computed(() => planets.map(p => ({
    name: p.name,
    values: [p.diameter],
    color: p.color,
})));

const galaxyConfig = ref({
    style: {
        chart: {
            backgroundColor: '#0d1117',
            color: '#e0e0e0',
            title: {
                text: 'Relative Planet Sizes',
                color: '#e0e0e0',
                fontSize: 14,
            },
            layout: {
                arcs: {
                    gradient: {
                        show: true,
                        intensity: 40,
                    },
                    strokeWidth: 0,
                },
            },
            legend: {
                backgroundColor: '#0d1117',
                color: '#e0e0e0',
                show: true,
            },
        },
    },
    userOptions: { show: false },
});

// --- Rings: orbital distances ---
const ringsDataset = computed(() => planets.map(p => ({
    name: p.name,
    values: [p.distanceAU],
    color: p.color,
})));

const ringsConfig = ref({
    style: {
        chart: {
            backgroundColor: '#0d1117',
            color: '#e0e0e0',
            title: {
                text: 'Orbital Distances (AU)',
                color: '#e0e0e0',
                fontSize: 14,
            },
            layout: {
                rings: {
                    strokeWidth: 2,
                    gradient: {
                        show: true,
                        intensity: 40,
                    },
                },
            },
            legend: {
                backgroundColor: '#0d1117',
                color: '#e0e0e0',
                show: true,
            },
        },
    },
    userOptions: { show: false },
});

// --- Radar: planetary attributes (normalized 0-100) ---
// Attributes: Gravity, Moons, Diameter, Orbital Speed, Avg Temp (warmth)
const normalize = (val, min, max) => Math.round(((val - min) / (max - min)) * 100);

const radarDataset = computed(() => ({
    categories: [
        { name: 'Gravity' },
        { name: 'Moon Count' },
        { name: 'Diameter' },
        { name: 'Orbital Speed' },
        { name: 'Warmth' },
    ],
    series: planets.map(p => ({
        name: p.name,
        color: p.color,
        target: 100,
        values: [
            normalize(p.gravity, 3.7, 24.79),
            normalize(Math.log1p(p.moons), 0, Math.log1p(145)),
            normalize(p.diameter, 4879, 139820),
            normalize(p.orbitalSpeedKms, 5.43, 47.87),
            normalize(p.avgTempC, -200, 464),
        ],
    })),
}));

const radarConfig = ref({
    style: {
        chart: {
            backgroundColor: '#0d1117',
            color: '#e0e0e0',
            title: {
                text: 'Planetary Attributes (Normalized)',
                color: '#e0e0e0',
                fontSize: 14,
            },
            layout: {
                grid: {
                    stroke: '#2a3550',
                },
                outerPolygon: {
                    stroke: '#2a3550',
                },
            },
            legend: {
                backgroundColor: '#0d1117',
                color: '#e0e0e0',
                show: true,
            },
        },
    },
    userOptions: { show: false },
});

// --- Donut: atmospheric composition ---
const donutDataset = computed(() => selectedPlanet.value.atmosphere);

const donutConfig = computed(() => ({
    style: {
        chart: {
            backgroundColor: '#0d1117',
            color: '#e0e0e0',
            title: {
                text: `${selectedPlanet.value.name} Atmosphere`,
                color: '#e0e0e0',
                fontSize: 14,
            },
            legend: {
                backgroundColor: '#0d1117',
                color: '#e0e0e0',
                show: true,
            },
            layout: {
                donut: {
                    strokeWidth: 64,
                },
                labels: {
                    dataLabels: {
                        hideUnderValue: 3,
                    },
                },
            },
        },
    },
    userOptions: { show: false },
}));

// --- Thermometer: surface temperature ---
const thermoDataset = computed(() => ({
    value: selectedPlanet.value.avgTempC,
    from: -230,
    to: 500,
    steps: 15,
}));

const thermoConfig = computed(() => ({
    style: {
        chart: {
            backgroundColor: '#0d1117',
            color: '#e0e0e0',
            title: {
                text: `Avg ${selectedPlanet.value.avgTempC}°C`,
                color: '#e0e0e0',
                fontSize: 14,
                subtitle: {
                    text: `Range: ${selectedPlanet.value.minTempC}° to ${selectedPlanet.value.maxTempC}°C`,
                    color: '#8a8a8a',
                },
            },
            thermometer: {
                color: selectedPlanet.value.color,
            },
        },
    },
    userOptions: { show: false },
}));
</script>

<template>
    <div class="solar-system">
        <div class="hero">
            <h1 class="title">
                <span class="star-icon">✦</span>
                Solar System Explorer
                <span class="star-icon">✦</span>
            </h1>
            <p class="subtitle">An interactive tour of our cosmic neighborhood using vue-data-ui</p>
        </div>

        <!-- Planet Selector -->
        <div class="planet-selector">
            <button
                v-for="planet in planets"
                :key="planet.name"
                :class="['planet-btn', { active: selectedPlanetName === planet.name }]"
                :style="{ '--planet-color': planet.color }"
                @click="selectedPlanetName = planet.name"
            >
                <span class="planet-symbol">{{ planet.symbol }}</span>
                <span class="planet-name">{{ planet.name }}</span>
            </button>
        </div>

        <!-- Selected Planet Info Card -->
        <div class="planet-info-card" :style="{ borderColor: selectedPlanet.color }">
            <div class="planet-info-header">
                <span class="planet-big-symbol" :style="{ color: selectedPlanet.color }">
                    {{ selectedPlanet.symbol }}
                </span>
                <div>
                    <h2 :style="{ color: selectedPlanet.color }">{{ selectedPlanet.name }}</h2>
                    <p class="planet-desc">{{ selectedPlanet.description }}</p>
                </div>
            </div>
            <div class="planet-stats">
                <div class="stat">
                    <span class="stat-label">Gravity</span>
                    <span class="stat-value">{{ selectedPlanet.gravity }} m/s²</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Moons</span>
                    <span class="stat-value">{{ selectedPlanet.moons }}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Diameter</span>
                    <span class="stat-value">{{ selectedPlanet.diameter.toLocaleString() }} km</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Distance from Sun</span>
                    <span class="stat-value">{{ selectedPlanet.distanceAU }} AU</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Orbital Period</span>
                    <span class="stat-value">{{ selectedPlanet.orbitalPeriodYears }} Earth years</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Orbital Speed</span>
                    <span class="stat-value">{{ selectedPlanet.orbitalSpeedKms }} km/s</span>
                </div>
            </div>
        </div>

        <!-- Section 1: Overview Charts -->
        <div class="section-label">System Overview</div>
        <div class="charts-row">
            <div class="chart-card">
                <LocalVueUiGalaxy :dataset="galaxyDataset" :config="galaxyConfig" />
            </div>
            <div class="chart-card">
                <LocalVueUiRings :dataset="ringsDataset" :config="ringsConfig" />
            </div>
        </div>

        <!-- Section 2: Radar Comparison -->
        <div class="section-label">All-Planet Attribute Comparison</div>
        <div class="charts-row">
            <div class="chart-card chart-card--wide">
                <LocalVueUiRadar :dataset="radarDataset" :config="radarConfig" />
            </div>
        </div>

        <!-- Section 3: Selected Planet Detail -->
        <div class="section-label">{{ selectedPlanet.name }} — Atmospheric & Thermal Profile</div>
        <div class="charts-row">
            <div class="chart-card chart-card--large">
                <LocalVueUiDonut :dataset="donutDataset" :config="donutConfig" />
            </div>
            <div class="chart-card chart-card--narrow">
                <div class="thermo-label">Surface Temperature</div>
                <LocalVueUiThermometer :dataset="thermoDataset" :config="thermoConfig" />
            </div>
        </div>

        <div class="footer">
            Built with ✦ vue-data-ui — Eloquent Data Storytelling
        </div>
    </div>
</template>

<style scoped>
.solar-system {
    background: #0d1117;
    min-height: 100vh;
    padding: 2rem;
    font-family: 'Inter', system-ui, sans-serif;
    color: #e0e0e0;
}

.hero {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem 0 1rem;
}

.title {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 0.5rem;
    letter-spacing: 0.05em;
    text-shadow: 0 0 30px rgba(180, 160, 255, 0.4);
}

.star-icon {
    color: #f0d060;
    margin: 0 0.5rem;
    font-size: 1.4rem;
}

.subtitle {
    color: #8a8a9a;
    font-size: 1rem;
    margin: 0;
}

/* Planet Selector */
.planet-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.planet-btn {
    background: #161b22;
    border: 1px solid #2a3550;
    border-radius: 2rem;
    color: #c0c0c0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    font-size: 0.85rem;
    transition: all 0.2s;
}

.planet-btn:hover {
    border-color: var(--planet-color);
    color: #fff;
    background: #1c2233;
}

.planet-btn.active {
    border-color: var(--planet-color);
    background: color-mix(in srgb, var(--planet-color) 15%, #161b22);
    color: #fff;
    box-shadow: 0 0 12px color-mix(in srgb, var(--planet-color) 50%, transparent);
}

.planet-symbol {
    font-size: 1rem;
}

/* Info Card */
.planet-info-card {
    background: #161b22;
    border: 1px solid #2a3550;
    border-radius: 1rem;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
    border-left-width: 4px;
    transition: border-color 0.3s;
}

.planet-info-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
}

.planet-big-symbol {
    font-size: 2.5rem;
    line-height: 1;
    transition: color 0.3s;
}

.planet-info-header h2 {
    margin: 0 0 0.3rem;
    font-size: 1.3rem;
    font-weight: 700;
    transition: color 0.3s;
}

.planet-desc {
    margin: 0;
    color: #8a8a9a;
    font-size: 0.88rem;
    line-height: 1.5;
}

.planet-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 120px;
}

.stat-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #6a6a8a;
}

.stat-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: #e0e0f0;
    font-variant-numeric: tabular-nums;
}

/* Section Labels */
.section-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #5a6a9a;
    border-bottom: 1px solid #2a3550;
    padding-bottom: 0.4rem;
    margin: 1.5rem 0 1rem;
}

/* Charts */
.charts-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
}

.chart-card {
    background: #161b22;
    border: 1px solid #1e2a3a;
    border-radius: 0.75rem;
    padding: 0.75rem;
    flex: 1;
    min-width: 280px;
    overflow: hidden;
}

.chart-card--wide {
    flex: 2;
    min-width: 400px;
}

.chart-card--large {
    flex: 2;
    min-width: 320px;
}

.chart-card--narrow {
    flex: 1;
    min-width: 160px;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.thermo-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5a6a9a;
    margin-bottom: 0.5rem;
    text-align: center;
}

.footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #2a3550;
    color: #4a4a6a;
    font-size: 0.8rem;
}
</style>
