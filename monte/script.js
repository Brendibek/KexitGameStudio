function calculateNetSalary() {
    const bruttoInput = document.getElementById('bruttoSalary');
    const netSalarySpan = document.getElementById('netSalary');
    const taxAmountSpan = document.getElementById('taxAmount');
    const taxPercentageSpan = document.getElementById('taxPercentage');
    const part0to700Span = document.getElementById('part0to700');
    const part700to1000Span = document.getElementById('part700to1000');
    const part1000plusSpan = document.getElementById('part1000plus');
    const netPart0to700Span = document.getElementById('netPart0to700');
    const netPart700to1000Span = document.getElementById('netPart700to1000');
    const netPart1000plusSpan = document.getElementById('netPart1000plus');
    const taxPart0to700Span = document.getElementById('taxPart0to700');
    const taxPart700to1000Span = document.getElementById('taxPart700to1000');
    const taxPart1000plusSpan = document.getElementById('taxPart1000plus');
    const incomeTaxPart0to700Span = document.getElementById('incomeTaxPart0to700');
    const incomeTaxPart700to1000Span = document.getElementById('incomeTaxPart700to1000');
    const incomeTaxPart1000plusSpan = document.getElementById('incomeTaxPart1000plus');
    const additionalTaxPart0to700Span = document.getElementById('additionalTaxPart0to700');
    const additionalTaxPart700to1000Span = document.getElementById('additionalTaxPart700to1000');
    const additionalTaxPart1000plusSpan = document.getElementById('additionalTaxPart1000plus');
    const pensionFundPart0to700Span = document.getElementById('pensionFundPart0to700');
    const pensionFundPart700to1000Span = document.getElementById('pensionFundPart700to1000');
    const pensionFundPart1000plusSpan = document.getElementById('pensionFundPart1000plus');
    const unemploymentInsurancePart0to700Span = document.getElementById('unemploymentInsurancePart0to700');
    const unemploymentInsurancePart700to1000Span = document.getElementById('unemploymentInsurancePart700to1000');
    const unemploymentInsurancePart1000plusSpan = document.getElementById('unemploymentInsurancePart1000plus');
    const chamberOfCommercePart0to700Span = document.getElementById('chamberOfCommercePart0to700');
    const chamberOfCommercePart700to1000Span = document.getElementById('chamberOfCommercePart700to1000');
    const chamberOfCommercePart1000plusSpan = document.getElementById('chamberOfCommercePart1000plus');
    const laborFundPart0to700Span = document.getElementById('laborFundPart0to700');
    const laborFundPart700to1000Span = document.getElementById('laborFundPart700to1000');
    const laborFundPart1000plusSpan = document.getElementById('laborFundPart1000plus');
    const unionPart0to700Span = document.getElementById('unionPart0to700');
    const unionPart700to1000Span = document.getElementById('unionPart700to1000');
    const unionPart1000plusSpan = document.getElementById('unionPart1000plus');
    const employerTaxPart0to700Span = document.getElementById('employerTaxPart0to700');
    const employerTaxPart700to1000Span = document.getElementById('employerTaxPart700to1000');
    const employerTaxPart1000plusSpan = document.getElementById('employerTaxPart1000plus');
	const totalEmployerTaxSpan = document.getElementById('totalEmployerTax');
	const totalCombinedTaxSpan = document.getElementById('totalCombinedTax');
	const directorTaxPercentageSpan = document.getElementById('directorTaxPercentage');

    const bruttoSalary = parseFloat(bruttoInput.value);

    const taxRate0to700 = 1.183431953;
    const taxRate700to1000 = 1.32450331; // 132.45% от брутто
    const taxRate1000plus = 1.438848921; // 143.88% от брутто

    const incomeTax0to700 = 0; // 0%
    const incomeTax700to1000 = 0.09; // 9%
    const incomeTax1000plus = 0.15; // 15%

    const additionalTaxRate = 0.15;

    const pensionFundRate = 0.055; // 5.5%
    const unemploymentInsuranceRate = 0.005; // 0.5%
    const chamberOfCommerceRate = 0.0027; // 0.27%
    const laborFundRate = 0.002; // 0.2%
    const unionRate = 0.002; // 0.2%

    let netSalary;
    let netPart0to700 = 0;
    let netPart700to1000 = 0;
    let netPart1000plus = 0;
    let part0to700 = 0;
    let part700to1000 = 0;
    let part1000plus = 0;
    let taxPart0to700 = 0;
    let taxPart700to1000 = 0;
    let taxPart1000plus = 0;
    let incomeTaxPart0to700 = 0;
    let incomeTaxPart700to1000 = 0;
    let incomeTaxPart1000plus = 0;
    let additionalTaxPart0to700 = 0;
    let additionalTaxPart700to1000 = 0;
    let additionalTaxPart1000plus = 0;

    let pensionFundPart0to700 = 0;
    let pensionFundPart700to1000 = 0;
    let pensionFundPart1000plus = 0;

    let unemploymentInsurancePart0to700 = 0;
    let unemploymentInsurancePart700to1000 = 0;
    let unemploymentInsurancePart1000plus = 0;

    let chamberOfCommercePart0to700 = 0;
    let chamberOfCommercePart700to1000 = 0;
    let chamberOfCommercePart1000plus = 0;

    let laborFundPart0to700 = 0;
    let laborFundPart700to1000 = 0;
    let laborFundPart1000plus = 0;

    let unionPart0to700 = 0;
    let unionPart700to1000 = 0;
    let unionPart1000plus = 0;

    let employerTaxPart0to700 = 0;
    let employerTaxPart700to1000 = 0;
    let employerTaxPart1000plus = 0;

    if (bruttoSalary <= 700) {
        part0to700 = bruttoSalary;
        netPart0to700 = part0to700 / taxRate0to700;
        taxPart0to700 = bruttoSalary - netPart0to700;
        incomeTaxPart0to700 = bruttoSalary * incomeTax0to700;
        additionalTaxPart0to700 = incomeTaxPart0to700 * additionalTaxRate;

        pensionFundPart0to700 = part0to700 * pensionFundRate;
        unemploymentInsurancePart0to700 = part0to700 * unemploymentInsuranceRate;
        chamberOfCommercePart0to700 = part0to700 * chamberOfCommerceRate;
        laborFundPart0to700 = part0to700 * laborFundRate;
        unionPart0to700 = part0to700 * unionRate;

        employerTaxPart0to700 = additionalTaxPart0to700 + pensionFundPart0to700 +
            unemploymentInsurancePart0to700 + chamberOfCommercePart0to700 +
            laborFundPart0to700 + unionPart0to700;
    } else if (bruttoSalary <= 1000) {
        part0to700 = 700;
        part700to1000 = bruttoSalary - 700;
        netPart0to700 = part0to700 / taxRate0to700;
        netPart700to1000 = part700to1000 / taxRate700to1000;
        taxPart0to700 = 700 - netPart0to700;
        taxPart700to1000 = part700to1000 - netPart700to1000;
        incomeTaxPart0to700 = 700 * incomeTax0to700;
        incomeTaxPart700to1000 = part700to1000 * incomeTax700to1000;
        additionalTaxPart0to700 = incomeTaxPart0to700 * additionalTaxRate;
        additionalTaxPart700to1000 = incomeTaxPart700to1000 * additionalTaxRate;

        pensionFundPart0to700 = part0to700 * pensionFundRate;
        pensionFundPart700to1000 = part700to1000 * pensionFundRate;

        unemploymentInsurancePart0to700 = part0to700 * unemploymentInsuranceRate;
        unemploymentInsurancePart700to1000 = part700to1000 * unemploymentInsuranceRate;

        chamberOfCommercePart0to700 = part0to700 * chamberOfCommerceRate;
        chamberOfCommercePart700to1000 = part700to1000 * chamberOfCommerceRate;

        laborFundPart0to700 = part0to700 * laborFundRate;
        laborFundPart700to1000 = part700to1000 * laborFundRate;

        unionPart0to700 = part0to700 * unionRate;
        unionPart700to1000 = part700to1000 * unionRate;

        employerTaxPart0to700 = additionalTaxPart0to700 + pensionFundPart0to700 +
            unemploymentInsurancePart0to700 + chamberOfCommercePart0to700 +
            laborFundPart0to700 + unionPart0to700;

        employerTaxPart700to1000 = additionalTaxPart700to1000 + pensionFundPart700to1000 +
            unemploymentInsurancePart700to1000 + chamberOfCommercePart700to1000 +
            laborFundPart700to1000 + unionPart700to1000;

    } else {
        part0to700 = 700;
        part700to1000 = 300;
        part1000plus = bruttoSalary - 1000;
        netPart0to700 = part0to700 / taxRate0to700;
        netPart700to1000 = part700to1000 / taxRate700to1000;
        netPart1000plus = part1000plus / taxRate1000plus;
        taxPart0to700 = 700 - netPart0to700;
        taxPart700to1000 = part700to1000 - netPart700to1000;
        taxPart1000plus = part1000plus - netPart1000plus;
        incomeTaxPart0to700 = 700 * incomeTax0to700;
        incomeTaxPart700to1000 = 300 * incomeTax700to1000;
        incomeTaxPart1000plus = part1000plus * incomeTax1000plus;
        additionalTaxPart0to700 = incomeTaxPart0to700 * additionalTaxRate;
        additionalTaxPart700to1000 = incomeTaxPart700to1000 * additionalTaxRate;
        additionalTaxPart1000plus = incomeTaxPart1000plus * additionalTaxRate;

        pensionFundPart0to700 = part0to700 * pensionFundRate;
        pensionFundPart700to1000 = part700to1000 * pensionFundRate;
        pensionFundPart1000plus = part1000plus * pensionFundRate;

        unemploymentInsurancePart0to700 = part0to700 * unemploymentInsuranceRate;
        unemploymentInsurancePart700to1000 = part700to1000 * unemploymentInsuranceRate;
        unemploymentInsurancePart1000plus = part1000plus * unemploymentInsuranceRate;

        chamberOfCommercePart0to700 = part0to700 * chamberOfCommerceRate;
        chamberOfCommercePart700to1000 = part700to1000 * chamberOfCommerceRate;
        chamberOfCommercePart1000plus = part1000plus * chamberOfCommerceRate;

        laborFundPart0to700 = part0to700 * laborFundRate;
        laborFundPart700to1000 = part700to1000 * laborFundRate;
        laborFundPart1000plus = part1000plus * laborFundRate;

        unionPart0to700 = part0to700 * unionRate;
        unionPart700to1000 = part700to1000 * unionRate;
        unionPart1000plus = part1000plus * unionRate;

        employerTaxPart0to700 = additionalTaxPart0to700 + pensionFundPart0to700 +
            unemploymentInsurancePart0to700 + chamberOfCommercePart0to700 +
            laborFundPart0to700 + unionPart0to700;

        employerTaxPart700to1000 = additionalTaxPart700to1000 + pensionFundPart700to1000 +
            unemploymentInsurancePart700to1000 + chamberOfCommercePart700to1000 +
            laborFundPart700to1000 + unionPart700to1000;

        employerTaxPart1000plus = additionalTaxPart1000plus + pensionFundPart1000plus +
            unemploymentInsurancePart1000plus + chamberOfCommercePart1000plus +
            laborFundPart1000plus + unionPart1000plus;
    }

    netSalary = netPart0to700 + netPart700to1000 + netPart1000plus;

    // Отображаем результаты
    part0to700Span.textContent = part0to700.toFixed(2) + ' €';
    netPart0to700Span.textContent = netPart0to700.toFixed(2) + ' €';
    taxPart0to700Span.textContent = taxPart0to700.toFixed(2) + ' €';
    incomeTaxPart0to700Span.textContent = incomeTaxPart0to700.toFixed(2) + ' €';
    additionalTaxPart0to700Span.textContent = additionalTaxPart0to700.toFixed(2) + ' €';
    pensionFundPart0to700Span.textContent = pensionFundPart0to700.toFixed(2) + ' €';
    unemploymentInsurancePart0to700Span.textContent = unemploymentInsurancePart0to700.toFixed(2) + ' €';
    chamberOfCommercePart0to700Span.textContent = chamberOfCommercePart0to700.toFixed(2) + ' €';
    laborFundPart0to700Span.textContent = laborFundPart0to700.toFixed(2) + ' €';
    unionPart0to700Span.textContent = unionPart0to700.toFixed(2) + ' €';
    employerTaxPart0to700Span.textContent = employerTaxPart0to700.toFixed(2) + ' €';

    part700to1000Span.textContent = part700to1000.toFixed(2) + ' €';
    netPart700to1000Span.textContent = netPart700to1000.toFixed(2) + ' €';
    taxPart700to1000Span.textContent = taxPart700to1000.toFixed(2) + ' €';
    incomeTaxPart700to1000Span.textContent = incomeTaxPart700to1000.toFixed(2) + ' €';
    additionalTaxPart700to1000Span.textContent = additionalTaxPart700to1000.toFixed(2) + ' €';
    pensionFundPart700to1000Span.textContent = pensionFundPart700to1000.toFixed(2) + ' €';
    unemploymentInsurancePart700to1000Span.textContent = unemploymentInsurancePart700to1000.toFixed(2) + ' €';
    chamberOfCommercePart700to1000Span.textContent = chamberOfCommercePart700to1000.toFixed(2) + ' €';
    laborFundPart700to1000Span.textContent = laborFundPart700to1000.toFixed(2) + ' €';
    unionPart700to1000Span.textContent = unionPart700to1000.toFixed(2) + ' €';
    employerTaxPart700to1000Span.textContent = employerTaxPart700to1000.toFixed(2) + ' €';

    part1000plusSpan.textContent = part1000plus.toFixed(2) + ' €';
    netPart1000plusSpan.textContent = netPart1000plus.toFixed(2) + ' €';
    taxPart1000plusSpan.textContent = taxPart1000plus.toFixed(2) + ' €';
    incomeTaxPart1000plusSpan.textContent = incomeTaxPart1000plus.toFixed(2) + ' €';
    additionalTaxPart1000plusSpan.textContent = additionalTaxPart1000plus.toFixed(2) + ' €';
    pensionFundPart1000plusSpan.textContent = pensionFundPart1000plus.toFixed(2) + ' €';
    unemploymentInsurancePart1000plusSpan.textContent = unemploymentInsurancePart1000plus.toFixed(2) + ' €';
    chamberOfCommercePart1000plusSpan.textContent = chamberOfCommercePart1000plus.toFixed(2) + ' €';
    laborFundPart1000plusSpan.textContent = laborFundPart1000plus.toFixed(2) + ' €';
    unionPart1000plusSpan.textContent = unionPart1000plus.toFixed(2) + ' €';
    employerTaxPart1000plusSpan.textContent = employerTaxPart1000plus.toFixed(2) + ' €';

    netSalarySpan.textContent = netSalary.toFixed(2) + ' €';
    taxAmountSpan.textContent = (taxPart0to700 + taxPart700to1000 + taxPart1000plus).toFixed(2) + ' €';
    taxPercentageSpan.textContent = `(${((taxPart0to700 + taxPart700to1000 + taxPart1000plus) / bruttoSalary * 100).toFixed(2)}%)`;
	totalEmployerTaxSpan.textContent = (employerTaxPart0to700 + employerTaxPart700to1000 + employerTaxPart1000plus).toFixed(2) + ' €';
	let totalCombinedTaxAmount = taxPart0to700 + taxPart700to1000 + taxPart1000plus + employerTaxPart0to700 + employerTaxPart700to1000 + employerTaxPart1000plus;
	totalCombinedTaxSpan.textContent = (totalCombinedTaxAmount).toFixed(2) + ' €';
	directorTaxPercentageSpan.textContent = `(${(100 - 100 / (netSalary + totalCombinedTaxAmount) * netSalary).toFixed(2)}%)`;
}