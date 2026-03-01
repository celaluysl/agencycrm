export type PaymentRegularity = "regular" | "pending" | "delayed";

interface HealthCalculationsParams {
    operationalScores: number[]; // Array of scores from 0-100 (e.g., SEO score, SEM score)
    paymentRegularity: PaymentRegularity;
    serviceDurationMonths: number;
}

/**
 * Calculates a client's health score (0-100) based on three key factors:
 * 1. Operational Success (40% weight): Average of all service scores
 * 2. Payment Regularity (40% weight): Based on payment status
 * 3. Service Duration (20% weight): Loyalty factor based on months of service
 */
export function calculateClientHealthScore({
    operationalScores,
    paymentRegularity,
    serviceDurationMonths,
}: HealthCalculationsParams): number {
    // 1. Operational Success (Average of scores)
    let avgOperationalScore = 0;
    if (operationalScores.length > 0) {
        const sum = operationalScores.reduce((acc, curr) => acc + curr, 0);
        avgOperationalScore = sum / operationalScores.length;
    }

    // 2. Payment Regularity Multiplier
    let paymentScore = 0;
    switch (paymentRegularity) {
        case "regular":
            paymentScore = 100;
            break;
        case "pending":
            paymentScore = 70;
            break;
        case "delayed":
            paymentScore = 30;
            break;
    }

    // 3. Service Duration Multiplier
    let durationScore = 0;
    if (serviceDurationMonths >= 24) {
        durationScore = 100;
    } else if (serviceDurationMonths >= 12) {
        durationScore = 80;
    } else if (serviceDurationMonths >= 6) {
        durationScore = 60;
    } else {
        durationScore = 40;
    }

    // Weighted Calculation: 40% Op + 40% Pay + 20% Dur
    const finalScore =
        (avgOperationalScore * 0.40) +
        (paymentScore * 0.40) +
        (durationScore * 0.20);

    return Math.round(finalScore);
}

/**
 * Determines the category of the client health based on the calculated score.
 */
export function getClientHealthCategory(score: number): "VIP" | "Riskli" | "Yeni Kazanılan" | "Normal" {
    if (score >= 85) return "VIP";
    if (score <= 45) return "Riskli";
    return "Normal";
}
