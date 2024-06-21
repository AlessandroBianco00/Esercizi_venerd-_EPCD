using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalcolatoreImposta
{
    enum Sesso
    {
        M,
        F
    }
    internal class Contribuente
    {
        public string Name {  get; set; }
        public string Surname { get; set; }
        public DateOnly BirthDate { get; set; }
        public Sesso Gender { get; set; }
        public string ComuneResidenza { get; set; }
        public string CodiceFiscale { get; set; }
        public int AnnualSalary { get; set; }

        public Contribuente(string name, string surname, DateOnly birthDate, Sesso gender, string comuneResidenza, string codiceFiscale, int annualSalary)
        {
            Name = name;
            Surname = surname;
            BirthDate = birthDate;
            Gender = gender;    
            ComuneResidenza = comuneResidenza;
            CodiceFiscale = codiceFiscale;
            AnnualSalary = annualSalary;
        }

        public int PayTaxes()
        {
            int mysalary = AnnualSalary;
            int taxes = 0;
            if (mysalary <= 15000) { taxes = mysalary * 23 / 100; }
            else if (mysalary <= 28000) { taxes = 3450 + ((mysalary - 15000) * 27 / 100); }
            else if (mysalary <= 55000) { taxes = 6960 + ((mysalary - 28000) * 38 / 100); }
            else if (mysalary <= 75000) { taxes = 17220 + ((mysalary - 55000) * 41 / 100); }
            else { taxes = 25420 + ((mysalary - 75000) * 43 / 100); }
            return taxes;
        }   
    }
}
