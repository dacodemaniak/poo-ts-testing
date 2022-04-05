<?php
class Coffee {
    private $coffeeType; // Untyped since PHP is not strongly typed
    public $origin;
    private $perKgPrice;

    public function __construct() {
        $this->perKgPrice = 0;
    }
    
    public function setCoffeeType(string coffeeType): void {
        if (strtolower($coffeeType) === 'arabica' || strtolower($coffeeType) === 'robusta') {
            $this->coffeeType = ucfirst(strtolower($coffeeType));
        }
    }

    public function getCoffeeType(): ?string {
        echo 'Machin';
        return $this->coffeeType;
    }

    /**
     * @usage :
     * $coffee = new Coffee();
     * $coffee->setCoffeeType('Arabica');
     * $coffee->origin = 'Honduras';
     * echo $coffee->type // output : Arabica
     */
    public function __get(string $attribute) {
        if (!property_exists($this, $attribute)) {
            if ($attribute === 'type') {
                return $this->coffeeType;
            }
        }
    }

    /**
     * @usage :
     * $coffee = new Coffee();
     * $coffee->setCoffeeType('Arabica');
     * $coffee->origin = 'Honduras';
     * echo $coffee; // Appelle implicitement __toString()
     */
    public function __toString(): string {
        return 'Type : ' + $this->coffeeType . ",\n" . 'Origine : ' . $this->origin . ",\n" . 'Prix : ' . $this->perKgPrice;
    }
}
